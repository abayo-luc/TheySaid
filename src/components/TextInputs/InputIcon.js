import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcons";

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

export default InputIcon;
