import { takeEvery, call, put } from "redux-saga/effects";
import { FETCHING_USER, SEARCHING_USER, FETCHING_PROFILES } from "../type";
import * as actions from "../actions";
import { getUsers, getUser, getProfile } from "../../utils/requests";
import { arrayToObject } from "../../utils/helpers";

export function* fetchUsers({ page }) {
  try {
    const response = yield call(getUsers, page);
    const { items } = response;
    const users = yield arrayToObject(items, "node_id");
    yield put(actions.setUsers(users));
  } catch (error) {
    yield put(actions.setFetchError);
  }
}
export function* searchUsers({ payload }) {
  const { username, page } = payload;
  try {
    const response = yield call(getUser, username.trim(), page);
    const { items } = response;
    const users = yield arrayToObject(items, "node_id");
    yield put(actions.setSearchResults(users));
  } catch (error) {
    yield put(actions.setFetchError);
  }
}

export function* fetchProfile({ payload }) {
  const { url } = payload;
  try {
    const response = yield call(getProfile, url);
    yield put(actions.setProfile(response));
  } catch (error) {
    const message = "Profile failed";
    yield put(actions.setProfileError({ message }));
  }
}
export default function* allSaga() {
  yield takeEvery(FETCHING_USER, fetchUsers);
  yield takeEvery(SEARCHING_USER, searchUsers);
  yield takeEvery(FETCHING_PROFILES, fetchProfile);
}
