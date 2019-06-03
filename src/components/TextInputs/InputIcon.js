import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcons";

const InputIcon = ({ onChangeText, value }) => (
  <View style={styles.container}>
    <CustomIcon name="search" size={32} color={styles.$themeColor} />
    <TextInput
      style={styles.input}
      placeholder="Search..."
      placeholderTextColor={styles.$themeColor}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
    />
  </View>
);

InputIcon.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string
};

InputIcon.defaultProps = {
  onChangeText: () => null,
  value: ""
};
export default InputIcon;
