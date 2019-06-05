import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";
import user from "../../data/user";
import CardContainer from "../../components/Cards/CardContainer";
import Loading from "../../components/ActivityIndicators/Loading";
// /icons
import fb from "../../assets/icons/fb.png";
import ig from "../../assets/icons/ig.png";
import google from "../../assets/icons/google.png";
import twitter from "../../assets/icons/twitter.png";
import folder from "../../assets/icons/folder.png";
import star from "../../assets/icons/star.png";
import gitHub from "../../assets/icons/github.png";
// action creators
import { fetchProfile } from "../../store/actions";

export class Profile extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#1e2354",
      borderColor: "#1e2354"
    },
    headerTitleStyle: {
      color: "#fff",
      fontWeight: "800"
    }
  };

  componentWillMount() {
    const {
      navigation: {
        state: { params }
      },
      fetchProfile: getProfile
    } = this.props;
    getProfile(params.url);
  }

  openProfileInBrowser = () => {
    try {
      Linking.openURL(user.html_url);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert("Error occurred");
    }
  };

  renderMetrics = profile => (
    <View style={{ flex: 1, marginTop: 15 }}>
      <View style={styles.cardWrapper}>
        <CardContainer style={styles.cardStyle}>
          <View style={styles.cardLeft}>
            <View style={styles.lgIconContainer}>
              <Image
                source={folder}
                style={styles.lgIcon}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.textStyle}>Repos</Text>
            </View>
            <View />
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.textStyle}>{profile.public_repos}</Text>
          </View>
        </CardContainer>
      </View>
      <View style={styles.cardWrapper}>
        <CardContainer style={styles.cardStyle}>
          <View style={styles.cardLeft}>
            <View style={styles.lgIconContainer}>
              <Image
                source={folder}
                style={styles.imgBck}
                resizeMode="contain"
              />
              <Image source={star} style={styles.smIcon} resizeMode="contain" />
            </View>
            <View>
              <Text style={styles.textStyle}>Stars</Text>
            </View>
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.textStyle}>887</Text>
          </View>
        </CardContainer>
      </View>
    </View>
  );

  render() {
    const { isFetching, profile } = this.props;
    if (isFetching) {
      return (
        <View style={[styles.container, { flex: 1 }]}>
          <Loading size="large" color="#fff" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: profile.avatar_url }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <View style={styles.namesContainer}>
            <Text style={[styles.textStyle, { alignSelf: "center" }]}>
              {profile.name}
            </Text>
            <Text style={[styles.textStyle, { alignSelf: "center" }]}>
              {profile.email}
            </Text>
          </View>
          <View style={styles.socials}>
            {[fb, twitter, google, ig].map((icon, index) => (
              <View style={styles.social} key={Number(index)}>
                <Image source={icon} resizeMode="contain" style={styles.icon} />
              </View>
            ))}
          </View>
          {this.renderMetrics(profile)}
          <TouchableOpacity
            style={styles.button}
            onPress={this.openProfileInBrowser}
            testID="github-button"
          >
            <View style={styles.smIconContainer}>
              <Image
                source={gitHub}
                style={styles.smIconExtra}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.buttonTitle}>GitHub</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  fetchProfile: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  profile: PropTypes.shape({}).isRequired
};

const mapStateToProps = ({ profile }) => ({
  ...profile
});
export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
