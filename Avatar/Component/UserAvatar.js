import React, { Component } from "react";
import { View, Text } from "react-native";
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
    source: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    name: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    placeHolder: PropTypes.number,
    size: PropTypes.number,
    radius: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number
  };

  static defaultProps = {
    source: null,
    name: " ",
    textColor: "#fff",
    colors: defaultColors,
    fontDecrease: 2.5,
    size: 48,
    radius: 0.5,
    placeHolder: require("./avatar_default.png"),
    style: null,
    borderColor: "",
    borderWidth: 0
  };

  render() {
    if (!this.props.name && !this.props.source) {
      throw new Error("Avatar requires a name or url source");
    }

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

    let inner;
    if (this.props.source) {
      const props = {
        style: imageStyle,
        source: this.props.source,
        placeHolder: this.props.placeHolder
      };

      inner = React.createElement(
        this.props.component || PlaceHolderImage,
        props
      );
    } else {
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
    }

    return (
      <View>
        <View style={[innerStyle, this.props.style]}>{inner}</View>
      </View>
    );
  }
}
