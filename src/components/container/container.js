import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";
import styles from "./styles";

const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
