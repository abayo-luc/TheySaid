import React from "react";
import renderer from "react-test-renderer";
import { Home } from "../../src/screens/Home/Home";

const [fetchUsers] = Array(1).fill(jest.fn());

const props = {
  allUsers: {},
  isFetching: false,
  fetchUsers
};
describe("Home Screen", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Home {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
