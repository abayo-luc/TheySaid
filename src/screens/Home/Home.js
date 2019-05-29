import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "./styles";
import InputIcon from "../../components/TextInputs/InputIcon";
import CardContainer from "../../components/Cards/CardContainer";
import UserList from "../../components/ListItem/UserList";
import users from "../../data/data";
import CustomIcon from "../../components/Icons/CustomIcons";

class Home extends Component {
  keyExtractor = (item, index) => `${item.id}${index}`;

  renderHeader = () => {
    return (
      <View style={styles.listHeader}>
        <CardContainer>
          <CustomIcon name="pin" size={36} color={styles.$iconTextColor} />
          <Text style={styles.locationText}>Java developers in Lagos</Text>
        </CardContainer>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Developers</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <InputIcon />
        </View>
        <View style={styles.content}>
          <View style={{ flex: 1 }}>
            <FlatList
              data={users}
              renderItem={user => <UserList user={user} />}
              ListHeaderComponent={this.renderHeader}
              keyExtractor={this.keyExtractor}
              style={styles.listStyle}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default Home;
