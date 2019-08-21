import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const CustomButton = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {children}
  </TouchableOpacity>
);
CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.shape({}),
};

CustomButton.defaultProps = {
  style: {},
};
export default CustomButton;
