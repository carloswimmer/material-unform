import React, { useEffect, useRef } from "react";
import { TextField } from "@material-ui/core";

import { useField } from "@unform/core";

const MuiTextField = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      label={label}
      inputRef={inputRef}
      defaultValue={defaultValue}
      variant="filled"
      fullWidth
      style={{ marginBottom: 24 }}
      error={!!error}
      helperText={error}
      {...rest}
    />
  );
};

export default MuiTextField;
