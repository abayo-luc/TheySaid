import { Dimensions, PixelRatio } from "react-native";

export const responsiveWidth = widthPercent => {
  const screenWidth = Dimensions.get("window").width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
export const responsiveHeight = heightPercent => {
  const screenHeight = Dimensions.get("window").height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
