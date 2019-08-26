import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";
import styles from "./styles";

const statusBar = ({ bgColor, ...props }) => (
  <View style={[styles.container, { backgroundColor: bgColor }]}>
    <StatusBar translucent {...props} />
  </View>
);

statusBar.propTypes = {
  bgColor: PropTypes.string,
};
statusBar.defaultProps = {
  bgColor: "rgba(0,0,0,0)",
};
export default statusBar;
