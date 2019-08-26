import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./styles";
import Icon from "../../components/Icons/CustomIcons";
import Button from "../../components/Buttons/CustomButton";

const items = [
  {
    icon: "home",
    text: "Home",
    path: "Home",
  },
  {
    icon: "pinned",
    text: "Favorite",
    path: "Favorites",
  },
];
const DrawerComponent = (props) => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="logo" size={{ width: 50, height: 20 }} />
      </View>
      <View style={styles.content}>
        {items.map((item, index) => (
          <Button key={`${item.icon}-${Number(index)}`} onPress={() => navigate(item.path)}>
            <View style={styles.item}>
              <Icon name={item.icon} size={5} color="#0F1336" />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </Button>
        ))}
      </View>
    </SafeAreaView>
  );
};

DrawerComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default DrawerComponent;
