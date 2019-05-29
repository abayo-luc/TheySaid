import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> [feature #166258383] build home page
import { View, TextInput } from "react-native";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcons";

<<<<<<< HEAD
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
=======
const InputIcon = () => {
  return (
    <View style={styles.container}>
      <CustomIcon name="search" size={32} color={styles.$themeColor} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={styles.$themeColor}
      />
    </View>
  );
};

>>>>>>> [feature #166258383] build home page
export default InputIcon;
