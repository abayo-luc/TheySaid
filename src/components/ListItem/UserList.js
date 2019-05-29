import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardContainer from "../Cards/CardContainer";
import styles from "./styles";

const UserList = () => {
  return (
    <View style={styles.userListContainer}>
      <CardContainer style={styles.row}>
        <View style={styles.row}>
          <Image
            source={{
              uri: `https://avatars1.githubusercontent.com/u/20681465?s=460&v=4`
            }}
            coverMode="contain"
            style={styles.avatar}
          />

          <View style={styles.userInfo}>
            <Text style={styles.textStyle}>John Doe</Text>
            <Text style={styles.textStyle}>john.doe@test.com</Text>
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
};

export default UserList;
