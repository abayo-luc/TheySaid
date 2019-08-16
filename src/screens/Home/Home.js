import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Text, View, FlatList } from "react-native";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "./styles";
import InputIcon from "../../components/TextInputs/InputIcon";
import CardContainer from "../../components/Cards/CardContainer";
import UserList from "../../components/ListItem/UserList";
import CustomIcon from "../../components/Icons/CustomIcons";
import Loading from "../../components/ActivityIndicators/Loading";
import { fetchQuotes } from "../../store/actions";
import Categories from "../../components/Categories";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.searchUsersTimeOut = 0;
    this.state = {
      page: 1,
      searchQuery: ""
    };
  }

  async componentDidMount() {
    this.fetchAllUsers();
  }

  keyExtractor = (item, index) => `${item.cacheId}${index}`;

  loadMore = () => {};

  handleSearchInput = text => {
    this.setState({ searchQuery: text });
  };

  fetchAllUsers = () => {
    const { page, searchQuery } = this.state;
    const { fetchQuotes: getUsers, isFetching } = this.props;
    if (!isFetching && !searchQuery) {
      getUsers(page);
    }
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

  renderItem = ({ item }) => {
    const { cse_image: images, metatags } = item.pagemap;
    const data = metatags[0];
    return (
      <UserList
        avatar={images[0] && images[0].src}
        description={data["twitter:description"]}
        onNavigate={() => this.handleNavigation(item.url)}
      />
    );
  };

  render() {
    const { allUsers, isFetching } = this.props;
    const { searchQuery } = this.state;
    const users = Object.values(allUsers);
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <InputIcon
              onChangeText={this.handleSearchInput}
              value={searchQuery}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.categoryContainer}>
              <Categories />
            </View>

            <View style={{ flex: 1 }}>
              <FlatList
                data={users}
                extraData={users}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                style={styles.listStyle}
                onRefresh={this.refreshData}
                refreshing={isFetching}
                ListFooterComponent={
                  isFetching ? <Loading size="large" /> : null
                }
              />
            </View>
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
  fetchQuotes: PropTypes.func.isRequired
};

const mapStateToProps = ({ users }) => ({
  ...users
});

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(Home);
