import React from "react";
import {
  View, Image, Text, StyleSheet,
} from "react-native";
import Emoji from "../../assets/emoji.png";
import { responsiveHeight } from "../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: responsiveHeight(8),
  },
  message: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: responsiveHeight(3),
  },
  text: {
    fontWeight: "bold",
    color: "#000",
  },
});
const index = () => (
  <View style={styles.container}>
    <Image source={Emoji} style={styles.img} resizeMode="contain" />
    <View style={styles.message}>
      <Text style={styles.text}>Everything looks cool!</Text>
      <Text style={styles.text}>
        Let do some digging, and see what they said!!
      </Text>
    </View>
  </View>
);

export default index;
