import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

const Main = () => {
  return (
    <div className="px-4 py-2">
      <h3 className="text-lg font-semibold">Mi Todo List</h3>
      <NewTodo />
      <TodoList />
    </div>
  );
};

export default Main;
