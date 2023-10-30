// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo-reducer";
import filterReducer from "./reducers/filter-reducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  },
});

export default store;
