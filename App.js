import React, { Component } from 'react'
import {
  Image,
  Button,
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
import HomeScreen from './screens/HomeScreen';
import noScreen from './screens/noScreen';
import yesScreen from './screens/yesScreen';
import testScreen from './screens/testScreen';
import extrasScreen from './screens/extrasScreen';
import qScreen from './screens/qScreen';
import pScreen from './screens/pScreen';
import loginScreen from './screens/loginScreen';
import resultsScreen from './screens/resultsScreen';
import welcomeScreen from './screens/welcomeScreen';
import amplify from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(amplify);

//rootstack for navigation
const RootStack = createStackNavigator(
  {
    Welcome: welcomeScreen,
    Home: HomeScreen,
    No: noScreen,
    Yes: yesScreen,
    Test: testScreen,
    Extras: extrasScreen,
    Questions: qScreen,
    Preferences: pScreen,
    Login: loginScreen,
    Results: resultsScreen
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}