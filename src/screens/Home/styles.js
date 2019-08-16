import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
import { responsiveWidth, responsiveHeight } from "../../utils/dimensions";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default EStyleSheet.create({
  $themeColor: "$primaryDark",
  $iconTextColor: "$textColor",
  headerContainer: {
    flex: 0.15,
    width: "100%",
    backgroundColor: "$primaryWhite"
  },
  header: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "$primaryDark",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    borderBottomRightRadius: responsiveWidth(8)
  },
  contentContainer: {
    flex: 0.85,
    width: "100%",
    backgroundColor: "$primaryDark"
  },
  content: {
    width: "100%",
    flex: 1,
    backgroundColor: "$primaryWhite",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(3),
    borderTopLeftRadius: responsiveWidth(8)
  },
  listContainer: {
    flex: 1,
    justifyContent: "center"
  },
  listStyle: {
    paddingTop: responsiveWidth(3),
    flex: 1
  },
  listHeader: {
    marginTop: responsiveWidth(3),
    height: SCREEN_WIDTH * 0.5
  },
  locationText: {
    fontSize: 18,
    fontWeight: "800",
    color: "$textColor"
  },
  textStyle: {
    color: "$textColor"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: responsiveHeight(10)
  },
  titleText: {
    color: "$textColor",
    fontWeight: "600",
    fontSize: 18
  },
  categoryContainer: {
    height: responsiveHeight(5)
  }
});
