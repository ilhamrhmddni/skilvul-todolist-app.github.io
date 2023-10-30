// todo-reducer.js
const initialState = {
  todos: [
    { id: 1, value: "Belajar React", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DEL_TODO":
      const filterTodo = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: filterTodo,
      };
    case "TOGGLE_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
          return todo;
        });
        return {
          ...state,
          todos: updatedTodos,
        };      
    case "EDIT_TODO":
      const editedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            value: action.payload.value,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: editedTodos,
      };
    default:
      return state;
  }
};

// Action creators
export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
}

export function delTodo(id) {
  return {
    type: "DEL_TODO",
    payload: id,
  };
}

export function comTodo(id) { // Update the action name
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}

export function editTodo(todo) {
  return {
    type: "EDIT_TODO",
    payload: todo,
  };
}

export default todoReducer;
