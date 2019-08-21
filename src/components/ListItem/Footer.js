import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcons";

const actions = [
  {
    name: "pin",
    color: "#0F1336",
    size: 5,
  },
  {
    name: "share",
    color: "#0F1336",
    size: 6,
  },
  {
    name: "copy",
    color: "#0F1336",
    size: 5,
  },
];
const Footer = ({
  onShare, onPinPress, onCopyPress, isPined,
}) => {
  actions[1].onPress = onShare;
  actions[0].onPress = onPinPress;
  actions[2].onPress = onCopyPress;
  actions[0].name = isPined ? "pinned" : "pin";
  return (
    <View style={styles.footerContainer}>
      {actions.map(({
        name, color, size, onPress,
      }) => (
        <TouchableOpacity onPress={onPress} key={name}>
          <CustomIcon name={name} color={color} size={size} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

Footer.propTypes = {
  onShare: PropTypes.func.isRequired,
  onPinPress: PropTypes.func.isRequired,
  onCopyPress: PropTypes.func.isRequired,
  isPined: PropTypes.bool,
};

Footer.defaultProps = {
  isPined: false,
};
export default Footer;
