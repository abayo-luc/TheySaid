import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Animated, Dimensions } from "react-native";

const w = Dimensions.get("window").width * 0.98;
const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    backgroundColor: "#e1e4e8"
  }
});
class ProgressiveImage extends Component {
  thumbnailAnimated = new Animated.Value(0);

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start();
  };

  render() {
    const { avatar, style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Animated.Image
          {...props}
          source={{ uri: `${avatar}?w=50&buster=${Math.random()}` }}
          style={[style, { opacity: this.thumbnailAnimated }]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={1}
        />
        <Animated.Image
          {...props}
          source={{
            uri: `${avatar}?w=${w * 2}&buster=${Math.random()}`
          }}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

ProgressiveImage.propTypes = {
  avatar: PropTypes.string,
  style: PropTypes.shape({})
};
ProgressiveImage.defaultProps = {
  avatar: "",
  style: {}
};
export default ProgressiveImage;
