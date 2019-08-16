/* eslint-disable import/no-named-as-default */
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home/Home";

const mainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  }
});

export default createAppContainer(mainStack);
