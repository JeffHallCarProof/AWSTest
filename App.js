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
import { WebBrowser } from 'expo';
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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#C32148'}
              style={styles.button}
              onPress={ () => this._onPress}
            >
              <Text> Girafe Facts </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
  _onPress = () => {
    WebBrowser.openBrowserAsync('https://www.reddit.com/r/giraffefacts/');
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
    paddingTop:60
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10
  },
});
