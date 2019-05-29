import React from "react";
import renderer from "react-test-renderer";
import Home from "../../src/screens/Home";

describe("Home Screen", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
