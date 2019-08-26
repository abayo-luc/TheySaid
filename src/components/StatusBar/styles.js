import EStyleSheet from "react-native-extended-stylesheet";
import { Platform, StatusBar } from "react-native";

const STATUS_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
export default EStyleSheet.create({
  container: {
    height: STATUS_HEIGHT,
  },
});
