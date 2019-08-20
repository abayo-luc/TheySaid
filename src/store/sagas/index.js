import { takeEvery, call, put } from "redux-saga/effects";
import { FETCHING_QUOTES } from "../type";
import * as actions from "../actions";
import { getQuotes } from "../../utils/requests";
import { arrayToObject } from "../../utils/helpers";

export function* fetchQuotes({ query }) {
  try {
    const response = yield call(getQuotes, query);
    const { quotes: data } = response;
    const users = yield arrayToObject(data, "cacheId");
    yield put(actions.setQuotes(users));
  } catch (error) {
    yield put(actions.setFetchError);
  }
}

export default function* allSaga() {
  yield takeEvery(FETCHING_QUOTES, fetchQuotes);
}
