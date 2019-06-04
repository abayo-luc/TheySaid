import React from "react";
import renderer from "react-test-renderer";
import { Profile } from "../../src/screens/Profile/Profile";
import user from "../../src/data/user";
import users from "../../src/store/reducers/users";

const [fetchProfile] = Array(1).fill(jest.fn());
const props = {
  profile: user,
  isFetching: false,
  navigation: {
    state: {
      params: { url: users.avatar_url }
    }
  },
  fetchProfile
};
describe("Profile Screen", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Profile {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
