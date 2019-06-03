import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";

const mainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile"
    }
  }
});

export default createAppContainer(mainStack);
