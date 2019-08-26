import { expectSaga } from "redux-saga-test-plan";
import { fetchQuotes } from "../../src/store/sagas";
import quoteReducers from "../../src/store/reducers/quotes";
import data from "../../src/data/data";
import { arrayToObject } from "../../src/utils/helpers";

const users = arrayToObject(data.quotes, "cacheId");

const mockFetchPromise = Promise.resolve({
  json: () => Promise.resolve(data),
});
// eslint-disable-next-line prefer-promise-reject-errors
const mockRejectedPromise = Promise.reject({
  error: "Invalid token",
});

const spyOnFetch = mockedRes => jest.spyOn(global, "fetch").mockImplementation(() => mockedRes);
const INITIAL_STATE_USER = {
  results: {},
  isFetching: false,
};

const STATE_WITH_USERS = {
  results: users,
  isFetching: false,
};

const USERS_ACTIONS = [
  { data: STATE_WITH_USERS, mock: mockFetchPromise },
  {
    data: { ...INITIAL_STATE_USER, errors: { message: "Unable to fetch!" } },
    mock: mockRejectedPromise,
  },
];

describe("All Sagas", () => {
  describe("Fetch quotes", () => {
    const payload = { page: 1 };
    USERS_ACTIONS.forEach(item => test("should dispatch FETCHING_QUOTES", () => {
      spyOnFetch(item.mock);
      return expectSaga(fetchQuotes, payload)
        .withReducer(quoteReducers)
        .hasFinalState(item.data)
        .run();
    }));
  });
});
