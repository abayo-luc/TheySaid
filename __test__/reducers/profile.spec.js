import profileReducer from "../../src/store/reducers/profile";
import { FETCHING_PROFILES } from "../../src/store/type";

const INITIAL_STATE = {
  isFetching: true,
  profile: {},
  errors: {}
};

describe("Profile State", () => {
  test("should return INITIAL_STATE", () => {
    expect(profileReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  test("should return FETCHING_PROFILE", () => {
    expect(profileReducer(INITIAL_STATE, { type: FETCHING_PROFILES })).toEqual({
      ...INITIAL_STATE,
      isFetching: true
    });
  });
});
