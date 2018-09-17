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
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';

import amplify from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(amplify);
class HomeScreen extends React.Component {
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
              onPress={this._yesPress}
            >
              <Text style={styles.btext}> Girafe Facts </Text>
            </TouchableHighlight>
            
              <Text> </Text>
            <TouchableHighlight
              underlayColor={'maroon'}
              style={styles.button}
              onPress={() => this.props.navigation.navigate('No')}
            
            >
              <Text style={styles.btext}> No Facts </Text>
            </TouchableHighlight>
            </View>
          </View>

    );
  }
  _yesPress = () => {
    Expo.WebBrowser.openBrowserAsync(
      'https://www.reddit.com/r/giraffefacts/'
    );
  };
}
class noScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    No: noScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
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
    paddingHorizontal: 10
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
