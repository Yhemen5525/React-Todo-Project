import React, { useState } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header>Igot Todo-App</header>
      <Form setInputText={setInputText} />
      <TodoList />
      <h2>{inputText}</h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
