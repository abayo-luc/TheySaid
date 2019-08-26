import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, FlatList, Clipboard } from "react-native";
import { isEmpty } from "lodash";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "./styles";
import InputIcon from "../../components/TextInputs/InputIcon";
import QuotesList from "../../components/ListItem";
import Loading from "../../components/ActivityIndicators/Loading";
import { fetchQuotes, pinQuote } from "../../store/actions";
import Categories from "../../components/Categories";
import Welcome from "../../components/Welcome";
import Toast from "../../components/Toast";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.searchUsersTimeOut = 0;
    this.state = {
      query: "",
      categoryIndex: -1,
      toastVisible: false,
      isSelected: false,
      selectedId: "",
    };
  }

  keyExtractor = (item, index) => `${item.cacheId}${index}`;

  handleSearchInput = (text) => {
    this.setState({ query: text, categoryIndex: -1 });
  };

  handleCategoryPress = (category, index) => {
    this.setState({ categoryIndex: parseFloat(index), query: "" });
    this.fetchData(category);
  };

  handleSubmit = () => {
    const { query } = this.state;
    const text = query.trim();
    if (text) {
      this.fetchData(text);
    }
  };

  fetchData = (query) => {
    const { fetchQuotes: queryData } = this.props;
    const queryText = query;
    queryData(queryText);
  };

  handleCopy = async (item) => {
    await Clipboard.setString(`"${item.description}" - ${item.author}`);
    this.setState(
      {
        toastVisible: true,
      },
      () => {
        this.hideToast();
      },
    );
  };

  hideToast = () => {
    this.setState({
      toastVisible: false,
    });
  };

  handleSelectItem = (selectedId) => {
    this.setState(state => ({
      isSelected: !state.isSelected,
      selectedId,
    }));
  };

  handlePin = (item, isPined) => {
    const { pinQuote: pinOrUnpin } = this.props;
    if (!isEmpty(item)) {
      pinOrUnpin(item, isPined);
    }
  };

  renderItem = ({ item }) => {
    const { selectedId, isSelected } = this.state;
    const { pinedQuotes } = this.props;
    const isPined = !isEmpty(pinedQuotes[item.cacheId]);

    return (
      <QuotesList
        onLongPress={() => this.handleCopy(item)}
        item={item}
        onNavigate={() => this.handleNavigation(item.url)}
        onCopy={() => this.handleCopy(item)}
        onPress={() => this.handleSelectItem(item.cacheId)}
        selectedId={selectedId}
        isSelected={isSelected}
        onPinPress={() => this.handlePin(item, isPined)}
        isPined={isPined}
      />
    );
  };

  renderHeader = () => {
    const { query } = this.state;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <InputIcon
            onChangeText={this.handleSearchInput}
            value={query}
            returnKeyType="search"
            onSubmitEditing={this.handleSubmit}
          />
        </View>
      </View>
    );
  };

  renderCategories = () => {
    const { categoryIndex } = this.state;
    return (
      <View style={styles.categoryContainer}>
        <Categories
          onPress={this.handleCategoryPress}
          categoryIndex={categoryIndex}
        />
      </View>
    );
  };

  renderResults = () => {
    const { results, isFetching } = this.props;
    const quotes = Object.values(results);
    return isFetching ? (
      <Loading size="large" />
    ) : (
      <FlatList
        data={quotes}
        extraData={quotes}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        style={styles.listStyle}
        showsVerticalScrollIndicator={false}
        removeClippedSubViews
        overScrollMode="auto"
        ListFooterComponent={() => <View style={styles.footerStyle} />}
      />
    );
  };

  render() {
    const { results, isFetching } = this.props;
    const { toastVisible } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {this.renderHeader()}
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            {this.renderCategories()}
            <View style={styles.listContainer}>
              {isEmpty(results) && !isFetching ? (
                <Welcome />
              ) : (
                this.renderResults()
              )}
            </View>
          </View>
        </View>
        <Toast visible={toastVisible} message="Copied" />
      </Container>
    );
  }
}

Home.propTypes = {
  results: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchQuotes: PropTypes.func.isRequired,
  pinQuote: PropTypes.func.isRequired,
  pinedQuotes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ quotes, pins }) => ({
  ...quotes,
  pinedQuotes: pins.quotes,
});

export default connect(
  mapStateToProps,
  { fetchQuotes, pinQuote },
)(Home);
