import {
  FETCHING_USER,
  FETCHING_PROFILES,
  USER_FETCHED_SUCCESS,
  USER_FETCH_FAILED,
  SEARCHING_USER,
  SEARCHING_USER_COMPLETE,
  PROFILE_FETCHING_SUCCESS,
  PROFILE_FETCHING_FAILED
} from "../type";

export const fetchUsers = page => ({
  type: FETCHING_USER,
  page
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

export const fetchProfile = url => ({
  type: FETCHING_PROFILES,
  payload: { url }
});

export const setProfile = profile => ({
  type: PROFILE_FETCHING_SUCCESS,
  payload: profile
});

export const setProfileError = error => ({
  type: PROFILE_FETCHING_FAILED,
  payload: error
});
