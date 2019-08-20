import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

export default EStyleSheet.create({
  cardContainer: {
    flex: 1,
    borderColor: "$softDark",
    borderWidth: StyleSheet.hairlineWidth * 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
