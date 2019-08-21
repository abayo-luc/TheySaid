import EStyleSheet from "react-native-extended-stylesheet";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensions";

export default EStyleSheet.create({
  $themeColor: "$primaryDark",
  main: {
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.5),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: responsiveWidth(1),
  },
  userListContainer: {
    marginBottom: responsiveWidth(4),
  },
  textStyle: {
    color: "$primaryDark",
    fontSize: 14,
    fontStyle: "italic",
  },
  footerContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
});
