import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCompleted } from "../store/slices/todos";

import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  
  const { todos } = useSelector((state) => state);
  const toggleItem = (id) => dispatch(toggleCompleted(id));

  return (
    <div>
      <h5>Lista de tareas</h5>
      <div className="flex gap-3 flex-wrap">
        {todos.list.map((item) => (
          <Todo key={item.id} todoItem={item} toggleItem={toggleItem} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
