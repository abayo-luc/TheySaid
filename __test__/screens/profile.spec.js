/* eslint-disable global-require */
import React from "react";
import renderer from "react-test-renderer";
import { Share } from "react-native";
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
  describe("Compoent renders correctly", () => {
    afterEach(() => {
      component.update(<Profile {...props} />);
    });
    test("renders correctly", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    test("should render images and icons", () => {
      const images = findByType("Image");
      expect(images.length).toEqual(6);
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
      jest.spyOn(instance, "handleShare");
      jest.spyOn(Share, "share");
    });
    afterEach(() => {
      instance.openProfileInBrowser.mockClear();
      instance.handleShare.mockClear();
      Share.share.mockClear();
    });
    test("should open GitHub profile in browser", () => {
      component.update(<Profile {...props} />);
      const gitHubButton = findByType("TouchableOpacity").find(
        item => item.props.testID === "github-button"
      );
      gitHubButton.props.onPress();
      expect(instance.openProfileInBrowser).toBeCalled();
    });
    test("should share develop profile", done => {
      const message = `Check out this awesome developer @${user.login}, ${
        user.html_url
      }`;
      component.update(<Profile {...props} />);
      const gitHubButton = findByType("TouchableOpacity").find(
        item => item.props.testID === "share-btn"
      );
      gitHubButton.props.onPress().then(() => {
        expect(instance.handleShare).toBeCalled();
        expect(Share.share).toHaveBeenCalledWith({ message });
        done();
      });
    });
    test("should share develop profile", done => {
      instance.setState({
        shareOpen: true
      });
      const gitHubButton = findByType("TouchableOpacity").find(
        item => item.props.testID === "share-btn"
      );
      gitHubButton.props.onPress().then(() => {
        expect(instance.handleShare).toBeCalled();
        expect(Share.share).not.toBeCalled();
        done();
      });
    });
  });
});
