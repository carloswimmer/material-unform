import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import "./App.css";

import MuiTextField from "./components/Form/MuiTextField";

const initialData = {
  email: "carlos@gmail.com",
  address: {
    city: "Guarujá",
  },
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
