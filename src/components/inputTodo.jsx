import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";
import { BsClipboard2Plus } from "react-icons/bs";

function InputTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");
  
  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const btnInput = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return; // Hindari menambahkan to-do kosong
  
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      value: todo,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  
    setTodo("");
  };
  

  return (
    <div className='justify-content items-center mt-16 my-12'>
      <h1 className="text-center text-5xl pb-12 font-bold">Notepad Azaa</h1>
      <form action="" className='w-full flex justify-center px-12 gap-2'>
        <input
          className='w-full border-2 border-black-500 p-3 rounded-lg'
          type="text"
          placeholder=""
          value={todo}
          name=""
          onChange={handleInput}
        />
        <button onClick={btnInput} className='border-2 border-black-500 px-4 rounded-lg'>
          <BsClipboard2Plus />
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
