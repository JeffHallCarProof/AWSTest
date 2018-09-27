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
import { withAuthenticator } from 'aws-amplify-react-native';
import _, {debounce} from 'lodash';

  //welcome screen
  export default class welcomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Home')
       }, 2500);
      const { navigation } = this.props;

      return (
            <View style={styles.welcomeContainer} onTouchStart={this.onPress}>
                <Text style={styles.welcomeText}>Welcome to Carproof's consumer app!</Text>
            </View>
      ); //End of return
    } //End of render

    

  } //End of class

  

  const styles = StyleSheet.create({
    
    welcomeContainer: {
        backgroundColor: '#246ee5',
        flex: 1,
        justifyContent: 'center'
    },

    welcomeText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: "#FFFFFF",
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30
    }

  });