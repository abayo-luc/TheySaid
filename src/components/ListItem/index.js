/* eslint-disable no-alert */
import React from "react";
import PropTypes from "prop-types";
import {
  View, Text, TouchableWithoutFeedback, Share,
} from "react-native";
import CardContainer from "../Cards/CardContainer";
import styles from "./styles";
import Footer from "./Footer";

const handleShare = async (description, author) => {
  try {
    await Share.share({
      message: `"${description}"- ${author}`,
      url: "https://brainyquote.com",
      title: "TheyQuoted",
    });
  } catch (error) {
    alert("Sharing failed!");
  }
};
const UserList = ({
  item,
  onLongPress,
  onCopy,
  onPress,
  isSelected,
  selectedId,
  onPinPress,
  isPined,
}) => {
  const { description, author } = item;
  return (
    <View style={styles.userListContainer}>
      <CardContainer style={styles.main}>
        <TouchableWithoutFeedback onLongPress={onLongPress} onPress={onPress}>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.textStyle}>
                {`"${description}"`}
                {" "}
-
                {author}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {isSelected && selectedId === item.cacheId && (
          <Footer
            onShare={() => handleShare(description, author)}
            onPinPress={onPinPress}
            onCopyPress={onCopy}
            isPined={isPined}
          />
        )}
      </CardContainer>
    </View>
  );
};

UserList.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cacheId: PropTypes.string.isRequired,
  }).isRequired,
  onLongPress: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  selectedId: PropTypes.string,
  onPinPress: PropTypes.func.isRequired,
  isPined: PropTypes.bool.isRequired,
};

UserList.defaultProps = {
  isSelected: false,
  selectedId: "",
};

export default UserList;
