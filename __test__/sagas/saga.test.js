import { expectSaga } from "redux-saga-test-plan";
import { fetchQuotes, searchUsers, fetchProfile } from "../../src/store/sagas";
import userReducers from "../../src/store/reducers/users";
import profileReducers from "../../src/store/reducers/profile";
import { users as data } from "../../src/data/data";
import { arrayToObject } from "../../src/utils/helpers";

const users = arrayToObject(data, "node_id");
const mockSuccessResponse = { items: data };
const mockFetchProfileSuccess = Promise.resolve({
  json: () => Promise.resolve({ ...data[0] })
});
const mockFetchPromise = Promise.resolve({
  json: () => Promise.resolve(mockSuccessResponse)
});
// eslint-disable-next-line prefer-promise-reject-errors
const mockRejectedPromise = Promise.reject({
  error: "Invalid token"
});

const spyOnFetch = mockedRes =>
  jest.spyOn(global, "fetch").mockImplementation(() => mockedRes);
const INITIAL_STATE_USER = {
  allUsers: {},
  isFetching: false
};

const STATE_WITH_USERS = {
  allUsers: users,
  isFetching: false
};
const PROFILE_INITIAL_STATE = {
  isFetching: true,
  profile: {},
  errors: {}
};
const USERS_ACTIONS = [
  { data: STATE_WITH_USERS, mock: mockFetchPromise },
  { data: INITIAL_STATE_USER, mock: mockRejectedPromise }
];

describe("All Sagas", () => {
  describe("Fetch users", () => {
    const payload = { page: 1 };
    USERS_ACTIONS.forEach(item =>
      test("should dispatch FETCHING_QUOTES", () => {
        spyOnFetch(item.mock);
        return expectSaga(fetchQuotes, payload)
          .withReducer(userReducers)
          .hasFinalState(item.data)
          .run();
      })
    );
  });
  describe("Search by username", () => {
    const payload = { page: 1, username: "moyne" };
    USERS_ACTIONS.forEach(item =>
      test("should search user by username SUCCESS and FAILED", () => {
        spyOnFetch(item.mock);
        return expectSaga(searchUsers, {
          payload
        })
          .withReducer(userReducers)
          .hasFinalState(item.data)
          .run();
      })
    );
  });
  describe("Fetch User Profile", () => {
    test("should fetch profile", () => {
      const payload = { url: data[0].url };
      spyOnFetch(mockFetchProfileSuccess);
      return expectSaga(fetchProfile, { payload })
        .withReducer(profileReducers)
        .hasFinalState({
          ...PROFILE_INITIAL_STATE,
          profile: data[0],
          isFetching: false
        })
        .run();
    });
    test("should reject fetch profile", () => {
      const payload = { url: data[0].url };
      spyOnFetch(mockRejectedPromise);
      return expectSaga(fetchProfile, { payload })
        .withReducer(profileReducers)
        .hasFinalState({
          ...PROFILE_INITIAL_STATE,
          errors: { message: "Profile failed" },
          isFetching: false
        })
        .run();
    });
  });
});
