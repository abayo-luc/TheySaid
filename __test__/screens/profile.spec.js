import React from "react";
import renderer from "react-test-renderer";
import { Profile } from "../../src/screens/Profile/Profile";
import user from "../../src/data/user";

jest.mock("ImageBackground", () => require.requireMock("ImageBackground"));
jest.mock("ScrollView", () => require.requireMock("ScrollViewMock"));
const [fetchProfile] = Array(1).fill(jest.fn());
const props = {
  profile: user,
  isFetching: false,
  navigation: {
    state: {
      params: { url: user.avatar_url }
    }
  },
  fetchProfile
};
const component = renderer.create(<Profile {...props} />);
describe("Profile Screen", () => {
  test("renders correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
