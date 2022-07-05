import React, { useState } from "react";

const NewTodo = ({ todoList, setTodoList }) => {
  const [newTodo, setNewTodo] = useState("");
  const addNewTodo = () => {
    if (newTodo === "") return;
    const newTodoList = [
      ...todoList,
      { id: todoList.length + 1, text: newTodo, completed: false },
    ];
    setTodoList(newTodoList);
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
