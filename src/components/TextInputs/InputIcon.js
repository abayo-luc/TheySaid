import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcons";

const InputIcon = ({ onChangeText, value, returnKeyType, onSubmitEditing }) => (
  <View style={styles.container}>
    <CustomIcon name="search" size={28} color={styles.$themeColor} />
    <TextInput
      style={styles.input}
      placeholder="Search..."
      placeholderTextColor={styles.$themeColor}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
    />
  </View>
);

InputIcon.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  returnKeyType: PropTypes.string,
  onSubmitEditing: PropTypes.func
};

InputIcon.defaultProps = {
  onChangeText: () => null,
  onSubmitEditing: () => null,
  value: "",
  returnKeyType: ""
};

export default InputIcon;
