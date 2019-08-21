import { ToastAndroid, Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const index = props => {
  const { visible, message } = props;
  if (visible && isAndroid) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default index;
