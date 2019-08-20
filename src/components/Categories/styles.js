import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemStyle: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    fontStyle: "italic"
  },
  selectedItem: {
    backgroundColor: "rgba(43, 46, 74, 0.4)",
    borderRadius: 10
  }
});
