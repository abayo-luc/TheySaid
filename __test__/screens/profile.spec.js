/* eslint-disable global-require */
import React from "react";
import renderer from "react-test-renderer";
import { Profile } from "../../src/screens/Profile/Profile";
import user from "../../src/data/user";

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
const findByType = type => component.root.findAllByType(type);
describe("Profile Screen", () => {
  afterEach(() => {
    component.update(<Profile {...props} />);
  });
  describe("Compoent renders correctly", () => {
    test("renders correctly", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    test("should render images and icons", () => {
      const images = findByType("Image");
      expect(images.length).toEqual(9);
    });
    test("should render component with activity indicator", () => {
      const newProps = {
        ...props,
        isFetching: true
      };
      component.update(<Profile {...newProps} />);
      const activityIndicator = component.root.findByType("ActivityIndicator");
      expect(activityIndicator).toBeTruthy();
    });
  });
  describe("Instance methods", () => {
    let instance;
    beforeEach(() => {
      instance = component.getInstance();
      jest.spyOn(instance, "openProfileInBrowser");
    });
    test("should open GitHub profile in browser", () => {
      component.update(<Profile {...props} />);
      const gitHubButton = findByType("TouchableOpacity").find(
        item => item.props.testID === "github-button"
      );
      gitHubButton.props.onPress();
      expect(instance.openProfileInBrowser).toBeCalled();
    });
  });
});
