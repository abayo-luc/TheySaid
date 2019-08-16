import { takeEvery, call, put } from "redux-saga/effects";
import { FETCHING_QUOTES } from "../type";
import * as actions from "../actions";
import { getQuotes } from "../../utils/requests";
import { arrayToObject } from "../../utils/helpers";

export function* fetchQuotes({ query }) {
  try {
    const response = yield call(getQuotes, query);
    const { quotes: items } = response;
    const quotes = yield arrayToObject(items, "cacheId");
    yield put(actions.setQuotes(quotes));
  } catch (error) {
    yield put(actions.setFetchError);
  }
}

export default function* allSaga() {
  yield takeEvery(FETCHING_QUOTES, fetchQuotes);
}
