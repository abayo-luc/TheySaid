import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  View,
  FlatList,
  Clipboard,
  ToastAndroid,
  Platform
} from "react-native";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "./styles";
import InputIcon from "../../components/TextInputs/InputIcon";
import QuotesList from "../../components/ListItem";
import Loading from "../../components/ActivityIndicators/Loading";
import { fetchQuotes } from "../../store/actions";
import Categories from "../../components/Categories";

const isIOS = Platform.OS === "ios";
const Toast = props => {
  const { visible } = props;
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export class Home extends Component {
  constructor(props) {
    super(props);
    this.searchUsersTimeOut = 0;
    this.state = {
      query: "",
      categoryIndex: -1,
      message: "",
      visible: false
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  keyExtractor = (item, index) => `${item.cacheId}${index}`;

  loadMore = () => {};

  handleSearchInput = text => {
    this.setState({ query: text });
  };

  handleSubmit = () => {
    const { isFetching } = this.props;
    const { query } = this.state;
    const text = query.trim();
    if (!isFetching && text) {
      this.fetchData(text);
    }
  };

  handleCategoryPress = (category, index) => {
    this.setState({ categoryIndex: parseFloat(index), query: "" });
    this.fetchData(category);
  };

  fetchData = query => {
    if (!query) {
      return;
    }
    const { fetchQuotes: queryData } = this.props;
    queryData(query);
  };

  handleCopy = item => {
    Clipboard.setString(`"${item.description}"- ${item.author}`);
    this.setState(
      {
        visible: true,
        message: "Copied"
      },
      () => {
        this.hideToast();
      }
    );
  };

  hideToast = () => {
    this.setState({
      visible: false
    });
  };

  renderItem = ({ item }) => {
    return (
      <QuotesList
        description={item.description}
        author={item.author}
        onNavigate={() => this.handleNavigation(item.url)}
        onLongPress={() => this.handleCopy(item)}
      />
    );
  };

  render() {
    const { results, isFetching } = this.props;
    const { query, categoryIndex, message, visible } = this.state;
    const users = Object.values(results);
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <InputIcon
              onChangeText={this.handleSearchInput}
              value={query}
              returnKeyType="search"
              onSubmit={this.handleSubmit}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.categoryContainer}>
              <Categories
                onPress={this.handleCategoryPress}
                categoryIndex={categoryIndex}
              />
            </View>

            <View style={styles.listContainer}>
              {isFetching ? (
                <Loading size="large" />
              ) : (
                <FlatList
                  data={users}
                  extraData={users}
                  renderItem={this.renderItem}
                  keyExtractor={this.keyExtractor}
                  style={styles.listStyle}
                  showsVerticalScrollIndicator={false}
                  removeClippedSubViews
                  overScrollMode="auto"
                />
              )}
              {isIOS ? null : <Toast visible={visible} message={message} />}
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

Home.propTypes = {
  results: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchQuotes: PropTypes.func.isRequired
};

const mapStateToProps = ({ quotes }) => ({
  ...quotes
});

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(Home);
