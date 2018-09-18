import React, { Component } from 'react'
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    View,
  } from 'react-native';
  import { createStackNavigator } from 'react-navigation';
  import { WebBrowser } from 'expo';
  import Amplify from 'aws-amplify';
  import { withAuthenticator } from 'aws-amplify-react-native';

export default class FeaturesScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const make = navigation.getParam('make', 'Invalid');
        const model = navigation.getParam('model', 'Invalid');
        const year = navigation.getParam('year', 'Invalid');

        return (        
            <Text>It worked.</Text>
        );
    }
}