import React, { useCallback, useRef } from "react";
import { Button } from "@material-ui/core";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import "./App.css";

import MuiTextField from "./components/Form/MuiTextField";

const initialData = {
  address: {
    city: "Guarujá",
  },
};

function App() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data, { reset }) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido.")
          .required("O e-mail é obrigatório."),
        password: Yup.string().min(6, "Digite no mínimo 6 caracteres."),
        address: Yup.object().shape({
          street: Yup.string().required("A rua é obrigatória."),
          number: Yup.number().required("O número é obrigatório."),
        }),
      });

      await schema.validate(data, { abortEarly: false });

      console.log("submitted: ", data);

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Material + Unformn</h1>
        <Form
          ref={formRef}
          initialData={initialData}
          onSubmit={handleSubmit}
          style={{ width: 350 }}
        >
          <MuiTextField name="email" label="E-mail" />
          <MuiTextField type="password" name="password" label="Senha" />

          <Scope path="address">
            <MuiTextField name="street" label="Rua" />
            <MuiTextField name="number" label="Número" />
            <MuiTextField name="city" label="Cidade" />
          </Scope>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#ff6d00" }}
            size="large"
          >
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
