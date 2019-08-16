import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import { isEmpty } from "lodash";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "./styles";
import InputIcon from "../../components/TextInputs/InputIcon";
import QuotesList from "../../components/ListItem";
import Loading from "../../components/ActivityIndicators/Loading";
import { fetchQuotes } from "../../store/actions";
import Categories from "../../components/Categories";
import categories from "../../components/Categories/categories";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.searchUsersTimeOut = 0;
    this.state = {
      query: "",
      categoryIndex: -1
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  keyExtractor = (item, index) => `${item.cacheId}${index}`;

  loadMore = () => {};

  handleSearchInput = text => {
    this.setState({ query: text });
    const { isFetching } = this.props;
    if (isFetching && text.trim()) {
      return;
    }
    if (this.searchUsersTimeOut) {
      clearTimeout(this.searchUsersTimeOut);
    }
    this.searchUsersTimeOut = setTimeout(() => {
      this.fetchData(text);
    }, 1000);
  };

  handleCategoryPress = (category, index) => {
    this.setState({ categoryIndex: parseFloat(index), query: "" });
    this.fetchData(category);
  };

  fetchData = query => {
    const { fetchQuotes: queryData } = this.props;
    let queryText = query;
    if (isEmpty(queryText)) {
      queryText = categories[Math.floor(Math.random() * categories.length)];
    }
    queryData(queryText);
  };

  renderItem = ({ item }) => {
    const { cse_image: images, metatags } = item.pagemap;
    const data = metatags[0];
    if (!data["twitter:description"]) {
      return null;
    }
    return (
      <QuotesList
        avatar={images[0] && images[0].src}
        description={data["twitter:description"]}
        onNavigate={() => this.handleNavigation(item.url)}
      />
    );
  };

  render() {
    const { results, isFetching } = this.props;
    const { query, categoryIndex } = this.state;
    const users = Object.values(results);
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <InputIcon onChangeText={this.handleSearchInput} value={query} />
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
