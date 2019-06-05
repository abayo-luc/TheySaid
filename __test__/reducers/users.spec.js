import userReducers from "../../src/store/reducers/users";
import {
  FETCHING_USER,
  USER_FETCH_FAILED,
  SEARCHING_USER
} from "../../src/store/type";

const INITIAL_STATE = {
  allUsers: {},
  isFetching: false
};
describe("User Reducers", () => {
  test("should return initial state", () => {
    expect(userReducers(undefined, {})).toEqual(INITIAL_STATE);
  });
  test("should change isFetching to true", () => {
    expect(userReducers(INITIAL_STATE, { type: FETCHING_USER })).toEqual({
      ...INITIAL_STATE,
      isFetching: true
    });
  });
  test("should respond to user fetch failed", () => {
    expect(userReducers(INITIAL_STATE, { type: USER_FETCH_FAILED })).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      errors: { message: "Unable to fetch!" }
    });
  });

  test("should change isFetching to true", () => {
    expect(userReducers(INITIAL_STATE, { type: SEARCHING_USER })).toEqual({
      ...INITIAL_STATE,
      isFetching: true
    });
  });
});
