import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTodoList, toggleCompleted } from "../store/slices/todos";

import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  
  const { todos } = useSelector((state) => state);
  const toggleItem = (id) => dispatch(toggleCompleted(id));
  const fetchTodos = () => dispatch(fetchTodoList())

  return (
    <div>
      <h5>Lista de tareas</h5>
      <div className="flex gap-3 flex-wrap">
        {todos.list.map((item) => (
          <Todo key={item.id} todoItem={item} toggleItem={toggleItem} />
        ))}
      </div>
      <button onClick={fetchTodos} className="mt-2 px-2 py-1 bg-blue-600 text-white rounded">Fetch Todos</button>
    </div>
  );
};

export default TodoList;
