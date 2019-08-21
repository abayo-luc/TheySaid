import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import CardContainer from "../Cards/CardContainer";
import styles from "./styles";

const UserList = ({ description, author, onLongPress }) => (
  <TouchableWithoutFeedback onLongPress={onLongPress}>
    <View style={styles.userListContainer}>
      <CardContainer style={styles.row}>
        <View style={styles.row}>
          <View style={styles.userInfo}>
            <Text style={styles.textStyle}>
              {`"${description}"`} - {author}
            </Text>
          </View>
        </View>
        <View />
      </CardContainer>
    </View>
  </TouchableWithoutFeedback>
);

UserList.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired
};

export default UserList;
