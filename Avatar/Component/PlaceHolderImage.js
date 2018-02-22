import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, Image, View } from "react-native";

export default class PlaceHolderImage extends React.Component {
  static propTypes = {
    placeHolder: PropTypes.number,
    hidePlaceholderOnLoad: PropTypes.bool
  };

  static defaultProps = {
    placeHolder: null,
    hidePlaceholderOnLoad: true
  };

  state = { showPlaceholder: true };

  onLoad() {
    this.props.hidePlaceholderOnLoad &&
      this.setState({ showPlaceholder: false });
    this.props.onLoad && this.props.onLoad();
  }

  renderImage() {
    if (this.props.source) {
      return <Image {...this.props} onLoad={this.onLoad.bind(this)} />;
    } else {
      return null;
    }
  }

  render() {
    if (this.props.placeHolder && this.state.showPlaceholder) {
      return (
        <ImageBackground
          key={this.props.key}
          imageStyle={{ borderRadius: this.props.style.borderRadius }}
          source={this.props.placeHolder}
          style={this.props.style}
        >
          {this.renderImage()}
        </ImageBackground>
      );
    }
    return this.props.source ? this.renderImage() : <View />;
  }
}
