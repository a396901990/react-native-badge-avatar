import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Avatar from './App/Avatar';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container} >
        <Avatar 
          size="120"
          borderWidth={3}
          borderColor="blue"
          name="John Doe"
          radius={0.2}
          url="https://dummyimage.com/100x100/000/fff"
          badge="6"
          badgeIcon={require('./images/test.png')}
        />
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
  }
});
