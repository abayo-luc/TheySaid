import userReducers from "../../src/store/reducers/users";
import {
  FETCHING_QUOTES,
  QUOTES_FETCH_FAILED,
  SEARCHING_QUOTES
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
    expect(userReducers(INITIAL_STATE, { type: FETCHING_QUOTES })).toEqual({
      ...INITIAL_STATE,
      isFetching: true
    });
  });
  test("should respond to user fetch failed", () => {
    expect(userReducers(INITIAL_STATE, { type: QUOTES_FETCH_FAILED })).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      errors: { message: "Unable to fetch!" }
    });
  });

  test("should change isFetching to true", () => {
    expect(userReducers(INITIAL_STATE, { type: SEARCHING_QUOTES })).toEqual({
      ...INITIAL_STATE,
      isFetching: true
    });
  });
});
