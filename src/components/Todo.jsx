import React from "react";

const Todo = ({ todoItem, toggleItem }) => (
  <div className="p-4 border border-slate-300 rounded-xl shadow flex flex-col gap-4">
    <span
      className={`text-sm font-semibold ${
        todoItem.completed ? "line-through" : ""
      }`}
    >
      {todoItem.text}
    </span>
    {todoItem.completed ? (
      <button
        className="bg-slate-300 py-1 px-2 rounded-xl text-white text-sm"
        onClick={() => toggleItem(todoItem.id)}
      >
        Reset
      </button>
    ) : (
      <button
        className="bg-blue-300 py-1 px-2 rounded-lg text-white text-sm"
        onClick={() => toggleItem(todoItem.id)}
      >
        Done
      </button>
    )}
  </div>
);

export default Todo;
