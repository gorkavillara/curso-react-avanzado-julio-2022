import { call, put } from "redux-saga/effects";
import { getUser } from "../requests/user";
import { setUser } from "../../store/slices/user";

export function* fetchUserHandler() {
  try {
    const { data: users } = yield call(getUser);
    yield put(setUser(users[0]));
  } catch (e) {
    console.error(e);
  }
}
