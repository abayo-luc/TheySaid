import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardContainer from "../Cards/CardContainer";
import styles from "./styles";

const UserList = ({ username, email, avatar }) => (
  <View style={styles.userListContainer}>
    <CardContainer style={styles.row}>
      <View style={styles.row}>
        <Image
          source={{
            uri: avatar
          }}
          coverMode="contain"
          style={styles.avatar}
        />

        <View style={styles.userInfo}>
          <Text style={styles.textStyle}>{username}</Text>
          <Text style={styles.textStyle}>{email || ""}</Text>
        </View>
      </View>
      <View style={styles.circle}>
        <Ionicons
          name="ios-arrow-round-forward"
          size={32}
          color={styles.$themeColor}
        />
      </View>
    </CardContainer>
  </View>
);

UserList.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string
};

UserList.defaultProps = {
  email: ""
};

UserList.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string
};

UserList.defaultProps = {
  email: ""
};

UserList.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string
};

UserList.defaultProps = {
  email: ""
};

export default UserList;
