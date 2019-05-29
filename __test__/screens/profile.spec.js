import React from "react";
import renderer from "react-test-renderer";
import Profile from "../../src/screens/Profile/Profile";

describe("Profile Screen", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
