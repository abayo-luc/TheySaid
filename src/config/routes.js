/* eslint-disable import/no-named-as-default */
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import Home from "../screens/Home";
import DrawerContent from "../screens/Drawer";
import Favorites from "../screens/Favorites";

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
});
const drawerNavigator = createDrawerNavigator(
  {
    Home: stackNavigator,
    Favorites,
  },
  {
    contentComponent: DrawerContent,
  },
);

export default createAppContainer(drawerNavigator);
