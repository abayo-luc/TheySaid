import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  $themeColor: "$primaryDark",
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10
  },
  userListContainer: {
    marginBottom: 15
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  userInfo: {
    marginLeft: 10
  },
  textStyle: {
    color: "$primaryDark",
    fontSize: 14,
    fontStyle: "italic"
  },
  circle: {
    backgroundColor: "$textColor",
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center"
  }
});
