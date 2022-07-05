import { configureStore } from "@reduxjs/toolkit";
import todos from "./slices/todos";

const store = configureStore({
  reducer: { todos },
});

export default store;
