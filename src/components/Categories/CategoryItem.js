import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CategoryItem = ({ item, index, categoryIndex, onPress }) => {
  const itemsStyles = [styles.itemStyle];
  if (categoryIndex === index) {
    itemsStyles.push(styles.selectedItem);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={itemsStyles}>
        <Text style={styles.item}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};
CategoryItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  categoryIndex: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};
export default CategoryItem;
