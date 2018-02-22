import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";

export default class BadgeView extends Component {
  static defaultProps = {
    badgePosition: "right",
    badgeIcon: null,
    badgeTextColor: "white",
    badgeBackgroundColor: "red",
    badgeSize: 0
  };

  static propTypes = {
    badgePosition: PropTypes.oneOf(["left", "right"]),
    badgeText: PropTypes.number,
    badgeTextColor: PropTypes.string,
    badgeSize: PropTypes.number,
    badgeBackgroundColor: PropTypes.string,
    parentView: PropTypes.element.isRequired,
    autoSize: PropTypes.bool,
    ...View.propTypes
  };

  render() {
    let badgeSize = this.props.badgeSize / 2.5;

    let badgeView;
    if (this.props.badgeIcon) {
      badgeView = (
        <Image
          style={{
            width: badgeSize,
            height: badgeSize,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -badgeSize,
            zIndex: 1
          }}
          source={this.props.badgeIcon}
        />
      );
    } else if (this.props.badgeText && this.props.badgeText != 0) {
      badgeView = (
        <View
          style={{
            backgroundColor: this.props.badgeBackgroundColor,
            width: badgeSize,
            height: badgeSize,
            borderRadius: badgeSize,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -badgeSize,
            zIndex: 1
          }}
        >
          <Text
            style={{
              color: this.props.badgeTextColor,
              textAlign: "center",
              fontSize: badgeSize / 2,
              fontWeight: "bold",
              margin: null
            }}
            numberOfLines={1}
          >
            {this.props.badgeText}
          </Text>
        </View>
      );
    } else {
      badgeView = <View />;
    }

    return (
      <View
        style={{
          alignItems:
            this.props.badgePosition === "left" ? "flex-start" : "flex-end"
        }}
      >
        {badgeView}
        {this.props.parentView}
      </View>
    );
  }
}
