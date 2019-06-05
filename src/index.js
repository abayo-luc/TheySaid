import React from "react";
import { Provider } from "react-redux";
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
export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
