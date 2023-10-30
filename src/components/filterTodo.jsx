import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/reducers/filter-reducer";

function FilterTodo() {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (selectedFilter) => {
    dispatch(setFilter(selectedFilter));
  }

  return (
    <div className="flex items-center justify-center gap-2 mx-24">
      <button
        onClick={() => handleFilter("All")}
        className={`border-2 border-black-500 px-4 rounded-lg ${filter === "All" ? "bg-gray-300" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => handleFilter("Active")}
        className={`border-2 border-black-500 px-4 rounded-lg ${filter === "Active" ? "bg-gray-300" : ""}`}
      >
        Active
      </button>
      <button
        onClick={() => handleFilter("Completed")}
        className={`border-2 border-black-500 px-4 rounded-lg ${filter === "Completed" ? "bg-gray-300" : ""}`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterTodo;
