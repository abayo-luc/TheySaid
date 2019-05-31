import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";

const CustomIcon = ({ name, size, color }) => (
  <Ionicons name={`${ICON_PREFIX}-${name}`} size={size} color={color} />
);

CustomIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};
CustomIcon.defaultProps = {
  name: "home",
  size: 32,
  color: "#fff"
};
export default CustomIcon;
