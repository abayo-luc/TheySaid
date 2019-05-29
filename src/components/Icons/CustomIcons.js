import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";

const CustomIcon = ({ name, size, color }) => {
  return <Ionicons name={`${ICON_PREFIX}-${name}`} size={size} color={color} />;
};
CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};
export default CustomIcon;
