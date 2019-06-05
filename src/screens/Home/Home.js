import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Text, View, FlatList, Platform } from "react-native";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "./styles";
import InputIcon from "../../components/TextInputs/InputIcon";
import CardContainer from "../../components/Cards/CardContainer";
import UserList from "../../components/ListItem/UserList";
import CustomIcon from "../../components/Icons/CustomIcons";
import Loading from "../../components/ActivityIndicators/Loading";
import { fetchUsers, searchingUser } from "../../store/actions";

const END_THRESHOLD = Platform.OS === "ios" ? 0 : 1;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.searchUsersTimeOut = 0;
    this.state = {
      page: 1,
      searchQuery: ""
    };
  }

  componentDidMount() {
    this.fetchAllUsers();
  }

  keyExtractor = (item, index) => `${item.id}${index}`;

  loadMore = () => {
    const { isFetching } = this.props;
    if (!isFetching) {
      this.setState(state => ({
        page: state.page + 1
      }));
      this.fetchAllUsers();
    }
  };

  refreshData = () => {
    this.fetchAllUsers(1);
  };

  handleSearchInput = text => {
    const { isFetching } = this.props;
    this.setState({
      searchQuery: text
    });

    if (isFetching) {
      return;
    }
    if (this.searchUsersTimeOut) {
      clearTimeout(this.searchUsersTimeOut);
    }
    this.searchUsersTimeOut = setTimeout(() => {
      const { searchingUser: searchUsers } = this.props;
      searchUsers(text);
    }, 500);
  };

  fetchAllUsers = () => {
    const { page, searchQuery } = this.state;
    const { fetchUsers: getUsers, isFetching } = this.props;
    if (!isFetching && !searchQuery) {
      getUsers(page);
    }
  };

  handleNavigation = url => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate("Profile", { url });
  };

  renderHeader = () => {
    const { allUsers, isFetching } = this.props;
    const numberOfUsers = Object.keys(allUsers).length;
    return (
      <View style={styles.listHeader}>
        <CardContainer>
          <CustomIcon name="pin" size={36} color={styles.$iconTextColor} />
          <Text style={styles.locationText}>Java developers in Lagos</Text>
        </CardContainer>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} testID="number-of-devs">
            {this.renderHeaderText(numberOfUsers, isFetching)}
          </Text>
        </View>
      </View>
    );
  };

  renderHeaderText = (number, isFetching) => {
    if (number !== 0 && !isFetching) {
      return `Developers: ${number}`;
    }
    if (number === 0 && !isFetching) {
      return `No developer found!`;
    }
    return "";
  };

  renderItem = ({ item }) => (
    <UserList
      avatar={item.avatar_url}
      username={item.login}
      onNavigate={() => this.handleNavigation(item.url)}
    />
  );

  render() {
    const { allUsers, isFetching } = this.props;
    const { searchQuery } = this.state;
    const users = Object.values(allUsers);
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <InputIcon
            onChangeText={this.handleSearchInput}
            value={searchQuery}
          />
        </View>
        <View style={styles.content}>
          <View style={{ flex: 1 }}>
            <FlatList
              data={users}
              extraData={users}
              renderItem={this.renderItem}
              ListHeaderComponent={this.renderHeader}
              keyExtractor={this.keyExtractor}
              style={styles.listStyle}
              onRefresh={this.refreshData}
              refreshing={isFetching}
              onEndReachedThreshold={END_THRESHOLD}
              onEndReached={this.loadMore}
              ListFooterComponent={isFetching ? <Loading size="large" /> : null}
            />
          </View>
        </View>
      </Container>
    );
  }
}

Home.propTypes = {
  allUsers: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  searchingUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ users }) => ({
  ...users
});

export default connect(
  mapStateToProps,
  { fetchUsers, searchingUser }
)(Home);
