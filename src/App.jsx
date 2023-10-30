import React from "react";
import InputTodo from "./components/inputTodo";
import FilterTodo from "./components/filterTodo";
import ListTodo from "./components/listTodo";

function App() {
  return (
    <div>
      <InputTodo />
      <FilterTodo />
      <ListTodo />
    </div>
  );
}

export default App;