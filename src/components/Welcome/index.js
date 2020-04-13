import React from "react";
import {
  View, Image, Text, StyleSheet, TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import CoolEm from "../../assets/emojis/cool.png";
import SorryEm from "../../assets/emojis/sorry.png";
import { responsiveHeight } from "../../utils/dimensions";

const emojis = {
  cool: CoolEm,
  sorry: SorryEm,
};
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
const Message = ({
  emoji, message, title, navigate, nextScreen,
}) => (
  <View style={styles.container}>
    <Image source={emojis[emoji]} style={styles.img} resizeMode="contain" />
    <View style={styles.message}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{message}</Text>
      {navigate && (
        <TouchableOpacity onPress={navigate}>
          <Text>
            Got to
            {nextScreen}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

Message.propTypes = {
  emoji: PropTypes.string,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  navigate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  nextScreen: PropTypes.string,
};

Message.defaultProps = {
  emoji: "cool",
  title: "",
  navigate: false,
  nextScreen: "",
};
export default Message;
