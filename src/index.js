/* eslint-disable global-require */
import React, { Component } from "react";
import { View } from "react-native";
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
        require("./assets/icons/share.png"),
        require("./assets/icons/search.png"),
        require("./assets/icons/pin.png")
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
        <View>
          <AppLoading
            startAsync={this.loadAssetsAsync}
            onError={this.handleLoadingError}
            onFinish={this.handleFinishLoading}
          />
        </View>
      );
    }
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
