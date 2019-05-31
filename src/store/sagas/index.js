import { takeEvery, call, put } from "redux-saga/effects";
import { FETCHING_USER } from "../type";
import * as actions from "../actions";
import { getUsers } from "../../utils/requests";
import { arrayToObject } from "../../utils/helpers";

export function* fetchUser({ page }) {
  try {
    const response = yield call(getUsers, page);
    const { items } = response;
    const users = yield arrayToObject(items, "node_id");
    yield put(actions.setUsers(users));
  } catch (error) {
    yield put(actions.setFetchError);
  }
}

export default function* allSaga() {
  yield takeEvery(FETCHING_USER, fetchUser);
}
