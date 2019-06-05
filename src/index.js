/* eslint-disable global-require */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppLoading, Asset } from "expo";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import store from "./store";

EStyleSheet.build({
  $primaryWhite: "#fff",
  $primaryDark: "#0F1336",
  $softDark: "rgba(43,46,74, 0.4)",
  $textColor: "#FFF",
  $iconColor: "#fff"
});

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  loadAssetsAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require("./assets/icons/fb.png"),
        require("./assets/icons/folder.png"),
        require("./assets/icons/github.png"),
        require("./assets/icons/google.png"),
        require("./assets/icons/ig.png"),
        require("./assets/icons/star.png"),
        require("./assets/icons/twitter.png"),
        require("./assets/image.jpg")
      ])
    ]);

  handleLoadingError = () => {
    // eslint-disable-next-line no-alert
    alert("Error occurred");
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
