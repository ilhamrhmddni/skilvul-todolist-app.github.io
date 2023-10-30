// filter-reducer.js
const initialState = {
    filter: "All", // Filter default adalah "All"
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export function setFilter(filter) {
    return {
      type: "SET_FILTER",
      payload: filter,
    };
  }
  
  export default filterReducer;
  