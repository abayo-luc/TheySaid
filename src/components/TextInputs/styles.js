import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  $iconColor: "$textColor",
  $themeColor: "$primaryDark",
  container: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "$textColor",
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 38
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    width: "90%"
  }
});
