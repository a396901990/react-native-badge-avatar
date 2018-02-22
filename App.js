import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Avatar from 'react-native-badge-avatar';
import Avatar from './Avatar/Avatar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Avatar
          size="68"
          name="Dean Guo"
          style={{margin:6}}
          // source={{url : "https://avatars3.githubusercontent.com/u/8385255?s=460&v=4" }}
          // placeHolder={require('./images/badge_icon.png')}
          onPress={ () => 
            alert('click')
          }
        />

        <Avatar
          size="68"
          name="Dean Guo"
          style={{margin:6}}
          // source={require('./images/badge_icon.png')}
          onPress={ () => 
            alert('click')
          }
        />

        <Avatar
          size="80"
          name="Dean Guo"
          source={{url : "https://avatars3.githubusercontent.com/u/8385255?s=460&v=4" }}
          badge="6"
        />

        <Avatar
          size="100"
          name="Dean Guo"
          radius={0.2}
          source={{url : "https://avatars3.githubusercontent.com/u/8385255?s=460&v=4" }}
          badge="6"
          badgeIcon={require('./images/badge_icon.png')}
        />

        <Avatar
          size="120"
          borderColor="black"
          borderWidth={3}
          name="Dean Guo"
          source={{url : "https://avatars3.githubusercontent.com/u/8385255?s=460&v=4" }}
        />

      </View >
    )

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
