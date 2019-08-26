/* eslint-disable global-require */
import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet } from "react-native";
import Icons from "./Icons";
import { responsiveWidth, responsiveHeight } from "../../utils/dimensions";

const styles = StyleSheet.create({
  icon: {
    width: responsiveWidth(10),
    height: responsiveHeight(10),
  },
});
const CustomIcon = ({
  name, size, color, style,
}) => {
  const iconsStyle = [styles.icon, { tintColor: color }];
  const iconSize = size.width
    ? {
      width: responsiveWidth(size.width || size.height),
      height: responsiveHeight(size.height || size.width),
    }
    : {
      width: responsiveWidth(size),
      height: responsiveHeight(size),
    };
  if (styles && Object.keys(styles).length > 0) {
    iconsStyle.push(style);
  }
  if (size) {
    iconsStyle.push(iconSize);
  }
  return <Image source={Icons[name]} style={iconsStyle} resizeMode="contain" />;
};

CustomIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
  color: PropTypes.string,
  style: PropTypes.shape({}),
};
CustomIcon.defaultProps = {
  name: "home",
  size: 32,
  color: "#fff",
  style: {},
};
export default CustomIcon;
