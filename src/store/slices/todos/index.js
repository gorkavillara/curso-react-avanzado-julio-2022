import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false
  },
  reducers: {},
});

export default todos.reducer;
