import React from "react";
import renderer from "react-test-renderer";
import { Home } from "../../src/screens/Home/Home";
import data from "../../src/data/data";
import { arrayToObject } from "../../src/utils/helpers";

jest.useFakeTimers();
jest.mock("ScrollView", () => require.requireMock("ScrollViewMock"));
const [fetchUsers, searchingUser] = Array(2).fill(jest.fn());

const props = {
  allUsers: { ...arrayToObject(data, "node_id") },
  isFetching: false,
  fetchUsers,
  searchingUser
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
    test("should render test input", () => {
      const searchInput = findElement("TextInput");
      expect(searchInput.length).toBe(1);
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
      expect(viewRoots.length).toEqual(2);
    });
  });
  describe("Home screen instances", () => {
    const usersList = findElement("RCTScrollView")[0];
    afterEach(() => {
      fetchUsers.mockClear();
      searchingUser.mockClear();
      setTimeout.mockClear();
      component.update(<Home {...props} />);
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
    test("should fetch user by username", () => {
      const searchInput = findElement("TextInput")[0];
      searchInput.props.onChangeText("luc");
      const { searchQuery } = componentInstances.state;
      expect(searchQuery).toEqual("luc");
      expect(setTimeout).toHaveBeenCalledTimes(1);
      jest.runOnlyPendingTimers();
      expect(searchingUser).toBeCalledWith("luc");
    });
    test("should not fetch user by username", () => {
      const newProps = {
        ...props,
        isFetching: true
      };
      component.update(<Home {...newProps} />);
      const searchInput = findElement("TextInput")[0];
      searchInput.props.onChangeText("muh");
      const { searchQuery } = componentInstances.state;
      expect(searchQuery).toEqual("muh");
      expect(setTimeout).not.toHaveBeenCalled();
      jest.runOnlyPendingTimers();
      expect(searchingUser).not.toBeCalled();
    });
  });
});