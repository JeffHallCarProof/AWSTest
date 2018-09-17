import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser, Constants } from 'expo';
import Amplify from 'aws-amplify';

import amplify from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(amplify);
export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'maroon'}
              style={styles.button}
              onPress={this._onPress}
            >
              <Text style={styles.btext}> Girafe Facts </Text>
            </TouchableHighlight>
            
              <Text> </Text>
            <TouchableHighlight
              underlayColor={'maroon'}
              style={styles.button}
              onPress={this._noPress}
            
            >
              <Text style={styles.btext}> No </Text>
            </TouchableHighlight>
            </View>
          </View>

    );
  }
  _onPress = () => {
    Expo.WebBrowser.openBrowserAsync(
      'https://www.reddit.com/r/giraffefacts/'
    );
  };
  _noPress = () => {
      Expo.WebBrowser.openBrowserAsync(
        'https://www.reddit.com/r/giraffefacts/'
      );
    
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  contentContainer: {
    paddingTop: 30,
  },
  bcontainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 400
  },
  btext: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#CB4154',
    padding: 10,
    borderRadius: 400
  },
});
