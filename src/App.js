import React from "react";
import "./App.css";
//importing components
import Form from "./components/Form.js";

export default function App() {
  return (
    <div className="App">
      <header>Igot Todo-App</header>
      <Form />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
