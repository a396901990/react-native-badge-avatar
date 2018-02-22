import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import BadgeView from "./Component/BadgeView";
import UserAvatar from "./Component/UserAvatar";
import PropTypes from "prop-types";
export default class Avatar extends Component {
  static propTypes = {
    badgeIcon: PropTypes.object,
    badgeTextColor: PropTypes.string,
    badgeBackgroundColor: PropTypes.string,
    badge: PropTypes.number,
    name: PropTypes.string.isRequired,
    source: PropTypes.object,
    placeHolder: PropTypes.object,
    size: PropTypes.number,
    radius: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    onPress: PropTypes.func,
    ...View.propTypes
  };

  static defaultProps = {
    badgeIcon: null,
    badgeTextColor: "white",
    badgeBackgroundColor: "red",
    badge: 0,
    name: "",
    source: null,
    placeHolder: null,
    size: 48,
    radius: 1,
    borderColor: "",
    borderWidth: 0,
    onPress: null
  };

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        disabled={!this.props.onPress}
        onPress={this.props.onPress}
      >
        <BadgeView
          parentView={
            <UserAvatar
              size={this.props.size}
              borderWidth={this.props.borderWidth}
              borderColor={this.props.borderColor}
              name={this.props.name}
              radius={this.props.radius / 2}
              source={this.props.source}
              placeHolder={this.props.placeHolder}
            />
          }
          badgeText={this.props.badge}
          badgeSize={this.props.size}
          badgeIcon={this.props.badgeIcon}
          badgeTextColor={this.props.badgeTextColor}
          badgeBackgroundColor={this.props.badgeBackgroundColor}
        />
      </TouchableOpacity>
    );
  }
}
