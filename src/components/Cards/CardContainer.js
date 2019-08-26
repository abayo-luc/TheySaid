/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const CardContainer = ({ children, style }) => {
  const containerStyles = [styles.cardContainer, style];
  return <View style={containerStyles}>{children}</View>;
};
CardContainer.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.shape({}),
};
CardContainer.defaultProps = {
  style: {},
};
export default CardContainer;
