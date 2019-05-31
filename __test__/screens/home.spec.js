import React from "react";
import renderer from "react-test-renderer";
import { Home } from "../../src/screens/Home/Home";
import data from "../../src/data/data";
import { arrayToObject } from "../../src/utils/helpers";

jest.mock("ScrollView", () => require.requireMock("ScrollViewMock"));
const [fetchUsers] = Array(1).fill(jest.fn());

const props = {
  allUsers: { ...arrayToObject(data, "node_id") },
  isFetching: false,
  fetchUsers
};
const component = renderer.create(<Home {...props} />);
const componentInstances = component.getInstance();
const findElement = type => component.root.findAllByType(type);
describe("Home Screen", () => {
  describe("Home screen rendered correctly", () => {
    test("renders correctly", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    test("should render one list", () => {
      const usersList = findElement("RCTScrollView");
      expect(usersList.length).toBe(1);
      expect(usersList[0].props.onEndReachedThreshold).toEqual(0);
    });
    test("should should render loading component", () => {
      const newProps = {
        ...props,
        allUsers: {},
        isFetching: true
      };
      const loadingComponent = renderer.create(<Home {...newProps} />);
      const viewRoots = loadingComponent.root.findAll(
        item => item.props.testID
      );
      expect(viewRoots.length).toEqual(0);
    });
  });
  describe("Home screen instances", () => {
    const usersList = findElement("RCTScrollView")[0];
    afterEach(() => {
      fetchUsers.mockClear();
    });
    test("should call fetch user on component mount", () => {
      expect(fetchUsers).toBeCalledWith(1);
    });
    test("should re-fetch on refresh event", () => {
      usersList.props.onRefresh();
      expect(fetchUsers).toHaveBeenCalledTimes(1);
      expect(fetchUsers).toBeCalledWith(1);
    });
    test("should load more data on reach end", () => {
      const { page } = componentInstances.state;
      usersList.props.onEndReached();
      expect(fetchUsers).toHaveBeenCalledTimes(1);
      expect(fetchUsers).toBeCalledWith(page + 1);
    });
    test("should should not fetch more data if isFetching true", () => {
      const newProps = { ...props, isFetching: true };
      component.update(<Home {...newProps} />);
      usersList.props.onEndReached();
      usersList.props.onRefresh();
      expect(fetchUsers).not.toHaveBeenCalled();
    });
  });
});
