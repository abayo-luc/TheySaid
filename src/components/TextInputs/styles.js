import EStyleSheet from "react-native-extended-stylesheet";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensions";

export default EStyleSheet.create({
  $iconColor: "$textColor",
  $themeColor: "$primaryDark",
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "$textColor",
    marginHorizontal: responsiveWidth(5),
    borderRadius: 5,
    paddingHorizontal: 5,
    height: responsiveHeight(6),
  },
  input: {
    fontSize: 14,
    width: "100%",
    height: responsiveHeight(4),
  },
});
