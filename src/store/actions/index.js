import {
  FETCHING_QUOTES,
  QUOTES_FETCHED_SUCCESS,
  QUOTES_FETCH_FAILED,
  PIN_QUOTES,
} from "../type";

export const fetchQuotes = query => ({
  type: FETCHING_QUOTES,
  query,
});

export const setQuotes = quotes => ({
  type: QUOTES_FETCHED_SUCCESS,
  payload: quotes,
});

export const setFetchError = () => ({
  type: QUOTES_FETCH_FAILED,
});

export const pinQuote = (quote, isPined) => ({
  type: PIN_QUOTES,
  payload: { quote, isPined },
});
