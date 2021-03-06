import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import initials from "initials";
import PlaceHolderImage from "./PlaceHolderImage";

// from https://flatuicolors.com/
const defaultColors = [
  "#2ecc71", // emerald
  "#3498db", // peter river
  "#8e44ad", // wisteria
  "#e67e22", // carrot
  "#e74c3c", // alizarin
  "#1abc9c", // turquoise
  "#2c3e50" // midnight blue
];

function sumChars(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

export default class UserAvatar extends Component {
  static propTypes = {
    source: PropTypes.string,
    name: PropTypes.string,
    textColor: PropTypes.string,
    placeholder: PropTypes.number,
    size: PropTypes.number,
    radius: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number
  };

  static defaultProps = {
    source: null,
    name: "",
    textColor: "#fff",
    colors: defaultColors,
    fontDecrease: 2.5,
    size: 48,
    radius: 0.5,
    placeholder: require('./avatar_default.png'),
    style: null,
    borderColor: "",
    borderWidth: 0
  };

  render() {
    let abbr = initials(this.props.name);

    const borderRadius = this.props.size * this.props.radius;

    const imageStyle = {
      borderRadius,
      borderColor: "transparent",
      borderWidth: 0
    };

    const innerStyle = {
      borderRadius,
      borderWidth: 1,
      borderColor: "transparent",
      justifyContent: "center",
      alignItems: "center"
    };

    if (this.props.size) {
      imageStyle.width = innerStyle.width = this.props.size;
      imageStyle.height = innerStyle.height = this.props.size;
    }

    if (this.props.borderWidth) {
      imageStyle.borderColor = innerStyle.borderColor = this.props.borderColor;
      imageStyle.borderWidth = innerStyle.borderWidth = this.props.borderWidth;
    }

    // priority: source > name > placeholder
    let inner;
    if (this.props.source) {
      const props = {
        style: imageStyle,
        source: { uri: this.props.source },
        placeHolder: this.props.placeholder
      };
      inner = React.createElement(
        this.props.component || PlaceHolderImage,
        props
      );
    } else if (this.props.name) {
      // pick a deterministic color from the list
      let i = sumChars(this.props.name) % this.props.colors.length;
      let background = this.props.colors[i];
      innerStyle.backgroundColor = background;

      inner = (
        <Text
          style={{
            fontSize: this.props.size / this.props.fontDecrease,
            color: this.props.textColor
          }}
        >
          {abbr}
        </Text>
      );
    } else {
      inner = <Image style={imageStyle} source={this.props.placeholder} />;
    }

    return <View style={[innerStyle, this.props.style]}>{inner}</View>;
  }
}
