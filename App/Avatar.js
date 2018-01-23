import React, { Component } from 'react';
import { View } from 'react-native';
import BadgeView from './BadgeView';
import UserAvatar from './UserAvatar';

export default class Avatar extends Component {

  static defaultProps = {
    badgeIcon: null,
    badgeTextColor: 'white',
    badgeBackgroundColor: 'red',
    badge: '',
    name: '',
    url: '',
    size: 48,
    radius: 1,
    borderColor: '',
    borderWidth: 0,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BadgeView
        parentView={
          <UserAvatar
            size={this.props.size}
            borderWidth={this.props.borderWidth}
            borderColor={this.props.borderColor}
            name={this.props.name}
            radius={this.props.radius / 2}
            src={this.props.url} />
        }
        badgeText={this.props.badge}
        badgeSize={this.props.size}
        badgeIcon={this.props.badgeIcon}
        badgeTextColor={this.props.badgeTextColor}
        badgeBackgroundColor={this.props.badgeBackgroundColor} />
    );
  }
}