import React, { Component } from "react";
import { Image } from "react-native";
import defaultImg from "../../assets/image.jpg";

export default class ProgressiveImage extends Component {
  imageLoadEnd = () => {};

  render() {
    return (
      <Image
        {...this.props}
        onProgress={this.imageLoadEnd}
        defaultSource={defaultImg}
      />
    );
  }
}
