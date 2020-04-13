import React from "react";
import {
  View, Image, Text, TouchableOpacity, StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";
import EmptyIcon from "../../assets/images/empty.png";
import SearchIcon from "../../assets/images/search.png";
import OfflineIcon from "../../assets/images/offline.png";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensions";

const illustrations = {
  empty: EmptyIcon,
  search: SearchIcon,
  offline: OfflineIcon,
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: responsiveHeight(15),

  },
  message: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: responsiveHeight(3),
  },
  text: {
    fontWeight: "bold",
    color: "#ccc",
  },
  darkText: {
    color: "$primaryDark",
    fontStyle: "italic",
    margin: 5,
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "$primaryDark",
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: 3,
    marginVertical: responsiveHeight(3),
  },
});
const Message = ({
  icon, message, title, navigate, nextScreen,
}) => (
  <View style={styles.container}>
    <Image source={illustrations[icon]} style={styles.img} resizeMode="contain" />
    <View style={styles.message}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{message}</Text>
      {navigate && (
        <TouchableOpacity onPress={navigate} style={styles.button}>
          <Text style={styles.darkText}>
            Got to
            {nextScreen}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

Message.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  navigate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  nextScreen: PropTypes.string,
};

Message.defaultProps = {
  icon: "empty",
  title: "",
  navigate: false,
  nextScreen: "",
};
export default Message;
