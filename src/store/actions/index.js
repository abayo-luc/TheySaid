import {
  FETCHING_QUOTES,
  FETCHING_PROFILES,
  QUOTES_FETCHED_SUCCESS,
  QUOTES_FETCH_FAILED,
  SEARCHING_QUOTES
} from "../type";

export const fetchQuotes = query => ({
  type: FETCHING_QUOTES,
  query
});

export const setQuotes = quotes => ({
  type: QUOTES_FETCHED_SUCCESS,
  payload: quotes
});

export const setFetchError = () => ({
  type: QUOTES_FETCH_FAILED
});

export const searchingUser = (query, page = 1) => ({
  type: SEARCHING_QUOTES,
  payload: { query, page }
});

export const fetchProfile = url => ({
  type: FETCHING_PROFILES,
  payload: { url }
});
