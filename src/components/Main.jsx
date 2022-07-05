import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

const Main = ({ todoList, setTodoList }) => {
  const toggleItem = (id) => {
    // const newTodoList = todoList.map((todo) =>
    //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
    // );
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="px-4 py-2">
      <h3 className="text-lg font-semibold">Mi Todo List</h3>
      <NewTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} toggleItem={toggleItem} />
    </div>
  );
};

export default Main;
