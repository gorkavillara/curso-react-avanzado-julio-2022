import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    list: [
      {
        id: 0,
        text: "Limpiar el coche",
        completed: false,
      },
    ],
    loading: false,
  },
  reducers: {
    toggleCompleted: (state, action) => {
      const id = action.payload;
      state.list = state.list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    },
    addTodo: (state, action) => {
      if (action.payload === "") return;
      const newTodo = {
        id: state.list.length,
        text: action.payload,
        completed: false,
      };
      state.list = [...state.list, newTodo];
    },
  },
});

export const { toggleCompleted, addTodo } = todos.actions;

export default todos.reducer;
