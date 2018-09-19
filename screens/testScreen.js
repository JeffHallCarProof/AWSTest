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
  export default class testScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

      return (
        <View style={styles.container}>
          <View style={styles.bcontainer}>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('Yes',{
                sId: 1,});
                }}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <Text></Text>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('No',{
                sId: 0,});
                }}>
              <Text style={styles.btext}> No Hot Dog </Text>
            </TouchableHighlight>
            
          </View>
        </View>
  
      ); //End of return
    } //End of render
  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 10
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },

    btext: {
      color: 'white'
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#0247FE',
      padding: 10,
      borderRadius: 400
    }

  });