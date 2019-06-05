import * as actions from "../../src/store/actions";
import * as types from "../../src/store/type";
import { arrayToObject } from "../../src/utils/helpers";
import data from "../../src/data/data";

describe("Name of the group", () => {
  test("should dispatch FETCHING_USER ", () => {
    const page = 1;
    const expectations = {
      type: types.FETCHING_USER,
      page
    };
    expect(actions.fetchUsers(page)).toEqual(expectations);
  });
  test("should dispatch FETCHING_PROFILE", () => {
    const url = "https://hello.com";
    const expectations = {
      type: types.FETCHING_PROFILES,
      payload: { url }
    };
    expect(actions.fetchProfile(url)).toEqual(expectations);
  });
  test("should dispatch USERS_FETCHED_SUCCESS", () => {
    const payload = arrayToObject(data, "node_id");
    const expectations = {
      type: types.USER_FETCHED_SUCCESS,
      payload
    };
    expect(actions.setUsers(payload)).toEqual(expectations);
  });
  test("should dispatch USERS_FETCHED_FAILED", () => {
    const expectations = {
      type: types.USER_FETCH_FAILED
    };
    expect(actions.setFetchError()).toEqual(expectations);
  });
});
