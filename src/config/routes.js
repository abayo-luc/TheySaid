/* eslint-disable import/no-named-as-default */
import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import CustomIcon from "../components/Icons/CustomIcons";

const isIOS = Platform.OS === "ios";
const backIcon = Platform.OS === "ios" ? "back" : "backward";
const mainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile",
        headerBackImage: () => (
          <CustomIcon size={22} color="#fff" name={backIcon} />
        )
      }
    }
  },
  {
    headerBackTitleVisible: isIOS
  }
);

export default createAppContainer(mainStack);
