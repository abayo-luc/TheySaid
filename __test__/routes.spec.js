import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import renderer from "react-test-renderer";
import Navigator from "../src/config/routes";

jest.mock("../src/screens/Home/Home");
const store = createStore(configureStore());
const component = renderer.create(
  <Provider store={store}>
    <Navigator />
  </Provider>
);
describe("App Routers", () => {
  test("should match snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
