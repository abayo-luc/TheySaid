import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import CardContainer from "../Cards/CardContainer";
import styles from "./styles";

const UserList = ({ description }) => (
  <View style={styles.userListContainer}>
    <CardContainer style={styles.row}>
      <View style={styles.row}>
        <View style={styles.userInfo}>
          <Text style={styles.textStyle}>{description}</Text>
        </View>
      </View>
      <View />
    </CardContainer>
  </View>
);

UserList.propTypes = {
  description: PropTypes.string.isRequired
};

export default UserList;
