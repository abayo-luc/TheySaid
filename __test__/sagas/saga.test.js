import { expectSaga } from "redux-saga-test-plan";
import { fetchUser } from "../../src/store/sagas";
import userReducers from "../../src/store/reducers/users";
import data from "../../src/data/data";
import { arrayToObject } from "../../src/utils/helpers";

describe("All Sagas", () => {
  test("should fetch users", () => {
    const mockSuccessResponse = { items: data };
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse)
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise); // 4
    return expectSaga(fetchUser, { page: 1 })
      .withReducer(userReducers)

      .hasFinalState({
        allUsers: { ...arrayToObject(data, "node_id") },
        isFetching: false
      })

      .run();
  });
});
