import React from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

const Loading = ({ size }) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={size} color={styles.$themeColor} />
    </View>
  );
};

Loading.propTypes = {
  size: PropTypes.string
};

Loading.defaultProps = {
  size: "large"
};

export default Loading;
