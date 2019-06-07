import {
  FETCHING_PROFILES,
  PROFILE_FETCHING_SUCCESS,
  PROFILE_FETCHING_FAILED
} from "../type";

const INITIAL_STATE = {
  isFetching: true,
  profile: {},
  errors: {}
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case FETCHING_PROFILES:
      return {
        ...state,
        isFetching: true
      };
    case PROFILE_FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        profile: payload
      };
    case PROFILE_FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: payload
      };
    default:
      return state;
  }
};
