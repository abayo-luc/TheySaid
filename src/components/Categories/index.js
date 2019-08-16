import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import categories from "./categories";

const styles = StyleSheet.create({
  itemStyle: {
    padding: 5
  },
  item: {
    fontStyle: "italic"
  }
});
export default () => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => console.log(item)}>
            <View style={styles.itemStyle}>
              <Text style={styles.item}>{item}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item}
      horizontal
    />
  );
};
