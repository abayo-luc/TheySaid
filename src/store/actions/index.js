import { FETCHING_USER, FETCHING_PROFILES } from "../type";

export const fetchUsers = page => ({
  type: FETCHING_USER,
  page
});

export const fetchProfile = () => ({
  type: FETCHING_PROFILES
});
