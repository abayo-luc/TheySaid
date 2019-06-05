import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  $iconColor: "$textColor",
  $themeColor: "$primaryDark",
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "$textColor",
    marginHorizontal: 10,
    marginVertical: 23,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    height: "80%",
    width: "90%"
  }
});
