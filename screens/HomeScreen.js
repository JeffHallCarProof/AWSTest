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

  //home screen
  export default class HomeScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      disabled: false,
    };

    render() {

      const { navigation } = this.props;
      this.state.disabled = navigation.getParam('disabled', false);

      return (
        
        <View style={styles.container}>
          <View style={styles.bcontainer}>

            <Text style={styles.qText}>Do you know what vehicle you're looking for?</Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              disabled={this.state.disabled}
              onPress={() => {this._onPress(screenId=1)}}
            >
              <Text style={styles.btext}> Yes </Text>
            </TouchableHighlight>
            <Text></Text>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              disabled={this.state.disabled}
              onPress={() => {this._onPress(screenId=0)}}
            >
              <Text style={styles.btext}> No </Text>
            </TouchableHighlight>

          </View>
        </View>
  
      ); //End of return
    } //End of render

    _onPress =_.throttle((screenId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(screenId)==0){
        Path ='Results'
      } else{
        Path='Results'
      }
      this.props.navigation.navigate(Path, {
        sId: screenId,})

    },1000,{leading:true, trailing:false});

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
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4
    },

    qText: {
      paddingBottom: 40,
      paddingLeft: 25,
      paddingRight: 25,
      fontSize: 18
    }

  });