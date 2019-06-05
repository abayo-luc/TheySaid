import {
  FETCHING_USER,
  FETCHING_PROFILES,
  USER_FETCHED_SUCCESS,
  USER_FETCH_FAILED,
  SEARCHING_USER,
  SEARCHING_USER_COMPLETE
} from "../type";

export const fetchUsers = page => ({
  type: FETCHING_USER,
  page
});

export const fetchProfile = () => ({
  type: FETCHING_PROFILES
});

export const setUsers = users => ({
  type: USER_FETCHED_SUCCESS,
  payload: users
});

export const setFetchError = () => ({
  type: USER_FETCH_FAILED
});

export const searchingUser = (username, page = 1) => ({
  type: SEARCHING_USER,
  payload: { username, page }
});

export const setSearchResults = users => ({
  type: SEARCHING_USER_COMPLETE,
  payload: users
});
