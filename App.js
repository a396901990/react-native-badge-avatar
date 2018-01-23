/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import UserAvatar from './App/UserAvatar';
import Badge from './App/Badge';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BadgeView from './App/BadgeView';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      // <View style={styles.container}>
      //   {/* <UserAvatar size="50" name="John Doe" colors={['#ccc', '#fafafa', '#ccaabb']} /> */}
      //   <BadgeView parentView={<View style={{ width: 40, height: 40, backgroundColor: 'blue' }} />}
      //     badgeText={"12"} />
      // </View>
      <View style = { styles.container } >
      
        <Badge minWidth={18} minHeight={18} textStyle={{ color: '#fff', }}>
          30
                </Badge>
        <BadgeView parentView={
          <UserAvatar size="60" name="John Doe" src="https://dummyimage.com/100x100/000/fff" /> 
        } badgeText={"3"} />

           </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
