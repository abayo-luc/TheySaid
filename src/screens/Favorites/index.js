import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  View, FlatList, Clipboard, Text,
} from "react-native";
import { isEmpty } from "lodash";
import Container from "../../components/container/container";
import StatusBar from "../../components/StatusBar/StatusBar";
import styles from "../Home/styles";
import QuotesList from "../../components/ListItem";
import { pinQuote } from "../../store/actions";
import Welcome from "../../components/Welcome";
import Toast from "../../components/Toast";

export class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastVisible: false,
      isSelected: false,
      selectedId: "",
      message: "",
    };
  }

  keyExtractor = (item, index) => `${item.cacheId}${index}`;

  handleSubmit = () => {
    const { query } = this.state;
    const text = query.trim();
    if (text) {
      this.fetchData(text);
    }
  };

  handleCopy = async (item) => {
    await Clipboard.setString(`"${item.description}" - ${item.author}`);
    this.setState(
      {
        toastVisible: true,
        message: "Copied to clipboard",
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
    const { quotes } = this.props;
    const isPined = !isEmpty(quotes[item.cacheId]);

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

  renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>My Favorite Quotes</Text>
      </View>
    </View>
  );

  renderResults = () => {
    const { quotes } = this.props;
    const data = Object.values(quotes);
    return (
      <FlatList
        data={data}
        extraData={data}
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
    const {
      quotes,
      navigation: { navigate },
    } = this.props;
    const { toastVisible, message } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {this.renderHeader()}
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.listContainer}>
              {isEmpty(quotes) ? (
                <Welcome
                  title="OohOoh"
                  message="You haven't added any quote!"
                  navigate={() => navigate("Home")}
                  nextScreen="home"
                />
              ) : (
                this.renderResults()
              )}
            </View>
          </View>
        </View>
        <Toast visible={toastVisible} message={message} />
      </Container>
    );
  }
}

Favorites.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  pinQuote: PropTypes.func.isRequired,
  quotes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ pins }) => ({
  quotes: pins.quotes,
});

export default connect(
  mapStateToProps,
  { pinQuote },
)(Favorites);
