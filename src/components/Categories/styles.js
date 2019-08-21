import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  itemStyle: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    fontStyle: "italic",
    color: "$primaryDark"
  },
  selectedItem: {
    backgroundColor: "rgba(43, 46, 74, 0.4)",
    borderRadius: 10
  }
});
