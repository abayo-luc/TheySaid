import * as actions from "../../src/store/actions";
import * as types from "../../src/store/type";
import { arrayToObject } from "../../src/utils/helpers";
import users from "../../src/data/data";

describe("Name of the group", () => {
  test("should dispatch FETCHING_QUOTES ", () => {
    const query = "Luc";
    const expectations = {
      type: types.FETCHING_QUOTES,
      query,
    };
    expect(actions.fetchQuotes(query)).toEqual(expectations);
  });
  test("should dispatch QUOTES_FETCHED_SUCCESS", () => {
    const payload = arrayToObject(users, "cacheId");
    const expectations = {
      type: types.QUOTES_FETCHED_SUCCESS,
      payload,
    };
    expect(actions.setQuotes(payload)).toEqual(expectations);
  });
  test("should dispatch QUOTES_FETCHED_FAILED", () => {
    const expectations = {
      type: types.QUOTES_FETCH_FAILED,
    };
    expect(actions.setFetchError()).toEqual(expectations);
  });
});
