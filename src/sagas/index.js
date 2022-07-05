import { takeLatest } from "redux-saga/effects";
import { fetchTodoList } from "../store/slices/todos";
import { fetchTodoHandler } from "./handlers/todos";
import { fetchUser } from "../store/slices/user";
import { fetchUserHandler } from "./handlers/user";

// Watcher -> Función generadora que se encarga de vincular acciones con handlers
// Vincular una acción del reducer -> Handler asíncrono
export function* watchSagasTodos() {
  yield takeLatest(fetchTodoList.type, fetchTodoHandler);
  yield takeLatest(fetchUser.type, fetchUserHandler);
}

// const FETCH_TODO_LIST = "FETCH_TODO_LIST";

// originalReducer(estadoOriginal, { type: FETCH_TODO_LIST, payload: { data } });

// function originalReducer(state, action) {
//   switch (action.type) {
//     case FETCH_TODO_LIST:
//     // Lógica
//     default:
//   }
// }
