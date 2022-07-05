import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import todos from "./slices/todos";
import user from "./slices/user"
import { watchSagasTodos } from "../sagas";

const sagaMiddlewareTodos = createSagaMiddleware()

const store = configureStore({
  reducer: { todos, user },
  middleware: [sagaMiddlewareTodos]
});

sagaMiddlewareTodos.run(watchSagasTodos)

export default store;
