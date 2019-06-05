import { expectSaga } from "redux-saga-test-plan";
import { fetchUsers, searchUsers, fetchProfile } from "../../src/store/sagas";
import userReducers from "../../src/store/reducers/users";
import profileReducers from "../../src/store/reducers/profile";
import data from "../../src/data/data";
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
describe("All Sagas", () => {
  describe("Fetch users", () => {
    const payload = { page: 1 };
    test("should fetch users", () => {
      jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
      return expectSaga(fetchUsers, payload)
        .withReducer(userReducers)
        .hasFinalState({
          ...STATE_WITH_USERS
        })
        .run();
    });
    test("should fetch users", () => {
      jest.spyOn(global, "fetch").mockImplementation(() => mockRejectedPromise);
      return expectSaga(fetchUsers, payload)
        .withReducer(userReducers)
        .hasFinalState({
          ...INITIAL_STATE_USER
        })
        .run();
    });
  });
  describe("Search by username", () => {
    const payload = { page: 1, username: "moyne" };
    test("should search user by username", () => {
      jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
      return expectSaga(searchUsers, {
        payload
      })
        .withReducer(userReducers)
        .hasFinalState({
          ...STATE_WITH_USERS
        })
        .run();
    });
    test("should search user by username", () => {
      jest.spyOn(global, "fetch").mockImplementation(() => mockRejectedPromise);
      return expectSaga(searchUsers, {
        payload
      })
        .withReducer(userReducers)
        .hasFinalState({
          ...INITIAL_STATE_USER
        })
        .run();
    });
  });
  describe("Fetch User Profile", () => {
    test("should fetch profile", () => {
      const payload = { url: data[0].url };
      jest
        .spyOn(global, "fetch")
        .mockImplementation(() => mockFetchProfileSuccess);
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
      jest.spyOn(global, "fetch").mockImplementation(() => mockRejectedPromise);
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
