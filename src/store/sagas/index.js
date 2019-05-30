import { takeEvery, call, put } from "redux-saga/effects";
import { FETCHING_USER, USER_FETCHED_SUCCESS } from "../type";
import { getUsers } from "../../utils/requests";
import { arrayToObject } from "../../utils/helpers";

function* fetchUser({ page }) {
  try {
    const response = yield call(getUsers, page);
    const { items } = response;
    const users = yield arrayToObject(items, "node_id");
    yield put({ type: USER_FETCHED_SUCCESS, payload: users });
  } catch (error) {
    console.error(error);
  }
}

export default function* allSaga() {
  yield takeEvery(FETCHING_USER, fetchUser);
}
