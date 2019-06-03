import { expectSaga } from "redux-saga-test-plan";
import { fetchUsers, searchUsers } from "../../src/store/sagas";
import userReducers from "../../src/store/reducers/users";
import data from "../../src/data/data";
import { arrayToObject } from "../../src/utils/helpers";

const users = arrayToObject(data, "node_id");
const mockSuccessResponse = { items: data };
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
});
