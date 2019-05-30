import { FETCHING_USER, USER_FETCHED_SUCCESS } from "../type";

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
    default:
      return state;
  }
};
