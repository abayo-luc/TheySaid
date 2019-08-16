import EStyleSheet from "react-native-extended-stylesheet";
import { responsiveHeight } from "../../utils/dimensions";

export default EStyleSheet.create({
  $iconColor: "$textColor",
  $themeColor: "$primaryDark",
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "$textColor",
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    height: responsiveHeight("6%"),
    width: "70%"
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    width: "90%",
    height: responsiveHeight("4%")
  }
});
