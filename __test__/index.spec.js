import React from "react";
import renderer from "react-test-renderer";
import App from "../src";

// const store = createStore(configureStore());
jest.mock("../src/store", () => ({
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn()
}));
jest.mock("../src/screens/Home/Home");
const component = renderer.create(<App />);
const instance = component.getInstance();
instance.loadAssetsAsync = jest.fn();
describe("Name of the group", () => {
  beforeEach(() => {
    instance.setState({ isLoadingComplete: true });
    component.update();
  });
  test("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
