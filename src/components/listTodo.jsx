import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delTodo, comTodo, editTodo } from "../redux/reducers/todo-reducer";
import { BsTrashFill, BsCheckSquare, BsXSquare } from "react-icons/bs";

function ListTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { filter } = useSelector((state) => state.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.completed;
    } else if (filter === "Completed") {
      return todo.completed;
    }
    return true;
  });

  const [editableId, setEditableId] = useState(null);
  const [editableValue, setEditableValue] = useState("");

  const handleComplete = (id) => {
    dispatch(comTodo(id));
  };

  const handleEdit = (id, value) => {
    setEditableId(id);
    setEditableValue(value);
  };

  const handleSaveEdit = (id, value) => {
    dispatch(editTodo({ id, value }));
    setEditableId(null);
  };

  const handleDelete = (id) => {
    dispatch(delTodo(id));
  };

  const handleCancelEdit = () => {
    setEditableId(null);
  };

  return (
    <div>
      <div className="mt-4 w-full">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between border-2 border-black-500 mx-12 p-2 my-2 rounded-lg ${
              todo.completed ? "bg-green-100" : ""
            }`}
          >
            <div className="flex items-center p-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleComplete(todo.id)}
                className="mr-2"
              />
              <div className="flex items-center justify-center w-full">
                {editableId === todo.id ? (
                  <div className="flex items-left w-full">
                    <input
                      className="flex mr-2 w-[50%]"
                      type="text"
                      value={editableValue}
                      onChange={(e) => setEditableValue(e.target.value)}
                    />
                    <div className="flex">
                      <button onClick={() => handleSaveEdit(todo.id, editableValue)} className="mx-2">
                        <BsCheckSquare size="1.5rem" />
                      </button>
                      <button onClick={handleCancelEdit} className="text-red-500 cursor-pointer">
                        <BsXSquare size="1.5rem" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className={`font-semibold ${todo.completed ? "line-through" : ""}`}>{todo.value}</p>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <button className="mx-1" onClick={() => handleEdit(todo.id, todo.value)}>
                {editableId === todo.id ? "" : "Edit"}
              </button>
              <button onClick={() => handleDelete(todo.id)} className="mx-1 text-red-500 cursor-pointer">
                <BsTrashFill size="1.5rem" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListTodo;
