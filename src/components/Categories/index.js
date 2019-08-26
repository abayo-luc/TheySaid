import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import categories from "./categories";
import CategoryItem from "./CategoryItem";

const CategoriesList = ({ onPress, categoryIndex }) => (
  <FlatList
    data={categories}
    extraData={categoryIndex}
    renderItem={({ item, index }) => (
      <CategoryItem
        item={item}
        index={index}
        categoryIndex={categoryIndex}
        onPress={() => onPress(item, index)}
      />
    )}
    keyExtractor={item => item}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);

CategoriesList.propTypes = {
  onPress: PropTypes.func.isRequired,
  categoryIndex: PropTypes.number.isRequired,
};

export default CategoriesList;
