/* eslint-disable global-require */
import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import EStyleSheet from "react-native-extended-stylesheet";
import { PersistGate } from "redux-persist/integration/react";
import Navigator from "./config/routes";
import Store from "./store";

EStyleSheet.build({
  $primaryWhite: "#fff",
  $primaryDark: "#0F1336",
  $softDark: "rgba(43,46,74, 0.4)",
  $textColor: "#FFF",
  $iconColor: "#fff",
});

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  loadAssetsAsync = async () => Promise.all([
    Asset.loadAsync([
      require("./assets/icons/share.png"),
      require("./assets/icons/search.png"),
      require("./assets/icons/pin.png"),
      require("./assets/images/search.png"),
      require("./assets/images/empty.png"),
    ]),
  ]);

  handleLoadingError = () => {
    // eslint-disable-next-line no-alert
    alert("Error occurred");
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { store, persistor } = Store();
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
        <PersistGate persistor={persistor} loading={null}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
