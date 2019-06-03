import {
  FETCHING_USER,
  USER_FETCHED_SUCCESS,
  USER_FETCH_FAILED,
  SEARCHING_USER,
  SEARCHING_USER_COMPLETE
} from "../type";

const INITIAL_STATE = {
  allUsers: {},
  isFetching: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      };
    case USER_FETCHED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allUsers: {
          ...state.allUsers,
          ...payload
        }
      };
    case USER_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: { message: "Unable to fetch!" }
      };
    case SEARCHING_USER:
      return {
        ...state,
        isFetching: true
      };
    case SEARCHING_USER_COMPLETE:
      return {
        ...state,
        isFetching: false,
        allUsers: {
          ...payload
        }
      };
    default:
      return state;
  }
};