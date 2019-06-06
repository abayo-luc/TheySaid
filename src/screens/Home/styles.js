import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default EStyleSheet.create({
  $themeColor: "$primaryDark",
  $iconTextColor: "$textColor",
  header: {
    flex: 0.13,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "$softDark",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
  content: {
    width: "100%",
    flex: 0.87,
    backgroundColor: "$primaryDark",
    paddingHorizontal: 10,
    paddingTop: 5
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
  }
});
