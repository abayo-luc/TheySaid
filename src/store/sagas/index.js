import { takeEvery, call, put } from "redux-saga/effects";
import { FETCHING_QUOTES } from "../type";
import * as actions from "../actions";
import { getQuotes } from "../../utils/requests";
import { arrayToObject } from "../../utils/helpers";

export function* fetchQuotes({ page }) {
  try {
    const response = yield call(getQuotes, page);
    const { items } = response;
    const users = yield arrayToObject(items, "cacheId");
    yield put(actions.setQuotes(users));
  } catch (error) {
    yield put(actions.setFetchError);
  }
}

export default function* allSaga() {
  yield takeEvery(FETCHING_QUOTES, fetchQuotes);
}
