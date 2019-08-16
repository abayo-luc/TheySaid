import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

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
    borderBottomRightRadius: 25
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
    paddingHorizontal: 15,
    paddingTop: 10,
    borderTopLeftRadius: 25
  },
  listStyle: {
    paddingTop: 10,
    flex: 1
  },
  listHeader: {
    marginTop: 10,
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
    marginVertical: 20
  },
  titleText: {
    color: "$textColor",
    fontWeight: "600",
    fontSize: 18
  },
  categoryContainer: {
    height: 25
  }
});
