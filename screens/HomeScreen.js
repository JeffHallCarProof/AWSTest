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

  //home screen
  export default class HomeScreen extends React.Component {
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
                onPress={() => this.props.navigation.navigate('Yes')}
              >
                <Text style={styles.btext}> Hot Dog </Text>
              </TouchableHighlight>
              
                <Text> </Text>
              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => this.props.navigation.navigate('No')}
              
              >
                <Text style={styles.btext}> No Hot Dog </Text>
              </TouchableHighlight>
              </View>
            </View>
  
      );
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