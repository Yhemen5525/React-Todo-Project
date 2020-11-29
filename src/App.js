import React, { useState } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>Igot Todo-App</header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList />
      <h2>{inputText}</h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
