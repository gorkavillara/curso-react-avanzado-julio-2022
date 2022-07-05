import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todos";

const NewTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const addNewTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="border-none shadow rounded-lg outline-none px-2"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={addNewTodo}
        className="bg-green-400 text-white px-2 py-1 rounded-lg"
      >
        Create
      </button>
    </div>
  );
};

export default NewTodo;
