import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import { Form } from "@unform/web";
import "./App.css";

import MuiTextField from "./components/Form/MuiTextField";

const initialData = {
  email: "carlos@gmail.com",
};

function App() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Material + Unformn</h1>
        <Form
          initialData={initialData}
          onSubmit={handleSubmit}
          style={{ width: 350 }}
        >
          <MuiTextField name="email" label="Email" />
          <MuiTextField type="password" name="password" label="Senha" />
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
