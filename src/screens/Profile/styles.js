import { Dimensions, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const DEVISE_WIDTH = Dimensions.get("window").width;

export default EStyleSheet.create({
  $themeColor: "$softDark",
  $colorText: "$textColor",
  container: {
    // flex: 1,
    backgroundColor: "$primaryDark",
    paddingHorizontal: 10,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: DEVISE_WIDTH * 0.95,
    height: DEVISE_WIDTH * 0.95,
    borderRadius: 10
  },
  socials: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  social: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginHorizontal: 15,
    backgroundColor: "$textColor",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: "$primaryDark"
  },
  namesContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3
  },
  cardWrapper: {
    height: 70,
    marginBottom: 15,
    width: DEVISE_WIDTH * 0.95
  },
  lgIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginHorizontal: 15,
    backgroundColor: "$textColor",
    alignItems: "center",
    justifyContent: "center"
  },
  lgIcon: {
    width: 32,
    height: 32,
    tintColor: "$primaryDark"
  },
  smIcon: {
    width: 32 / 2.5,
    height: 32 / 2.5,
    tintColor: "$textColor",
    marginTop: 4,
    position: "absolute"
  },
  imgBck: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "$textColor",
    fontSize: 16,
    fontWeight: "300"
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  cardRight: {
    marginHorizontal: 15
  },
  button: {
    width: DEVISE_WIDTH * 0.95,
    backgroundColor: "$colorText",
    height: 48,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonTitle: {
    color: "$primaryDark",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 15
  },
  smIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 19,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "$primaryDark",
    alignItems: "center",
    justifyContent: "center"
  },
  smIconExtra: {
    width: 18,
    height: 18
  }
});
