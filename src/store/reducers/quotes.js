import {
  FETCHING_QUOTES,
  QUOTES_FETCHED_SUCCESS,
  QUOTES_FETCH_FAILED,
  SEARCHING_QUOTES,
  SEARCHING_QUOTES_COMPLETE
} from "../type";

const INITIAL_STATE = {
  results: {},
  isFetching: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCHING_QUOTES:
      return {
        ...state,
        isFetching: true
      };
    case QUOTES_FETCHED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: {
          ...payload
        }
      };
    case QUOTES_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: { message: "Unable to fetch!" }
      };
    case SEARCHING_QUOTES:
      return {
        ...state,
        isFetching: true
      };
    case SEARCHING_QUOTES_COMPLETE:
      return {
        ...state,
        isFetching: false,
        results: {
          ...payload
        }
      };
    default:
      return state;
  }
};
