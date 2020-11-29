import React from "react";

const Form = function ({ inputText, setInputText, todos, setTodos }) {
  const textInputHandler = function (e) {
    setInputText(e.target.value);
  };

  const submitTodoHandler = function (e) {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);

    //empty text after sumbit - fix problem later
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={textInputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
