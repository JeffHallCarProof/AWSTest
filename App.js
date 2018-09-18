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
import featuresScreen from './screens/featuresScreen';
import amplify from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(amplify);


//rootstack for navigation
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    No: noScreen,
    Yes: yesScreen,
    Test: testScreen,
    Features: featuresScreen,
    Extras: extrasScreen
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
