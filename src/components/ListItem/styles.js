import EStyleSheet from "react-native-extended-stylesheet";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensions";

export default EStyleSheet.create({
  $themeColor: "$primaryDark",
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(0.5),
    borderRadius: responsiveWidth(3)
  },
  userListContainer: {
    marginBottom: responsiveWidth(3)
  },

  userInfo: {
    marginLeft: 10
  },
  textStyle: {
    color: "$primaryDark",
    fontSize: 14,
    fontStyle: "italic"
  }
});
