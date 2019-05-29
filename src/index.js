import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";

EStyleSheet.build({
  $primaryWhite: "#fff",
  $primaryDark: "#0F1336",
  $softDark: "rgba(43,46,74, 0.4)",
  $textColor: "#FFF",
  $iconColor: "#fff"
});
export default () => <Navigator />;
