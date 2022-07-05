import { call, put } from "redux-saga/effects";
// Realizamos las llamadas de requests
// Lanzamos acciones de estado
import { setTodoList } from "../../store/slices/todos";
import { getTodos } from "../requests/todos";

export function* fetchTodoHandler() {
  console.log("Empezamos a buscar");
  try {
    const { data: todoList } = yield call(getTodos);
    console.log(todoList);
    // Debemos actualizar el estado a través de "despachar" una acción (dispatch)
    yield put(setTodoList(todoList));
  } catch (e) {
    console.error(e);
  }
}
