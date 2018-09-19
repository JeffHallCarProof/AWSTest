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

  //screen for people who do know what car they want
  export default class yesScreen extends React.Component {

    static navigationOptions = {
        header: null,
      };

    render() { 
      
      const { navigation } = this.props;
      const screenId = navigation.getParam('sId', 'Invalid');

      if(JSON.stringify(screenId)==1)
      {
        Path='Test'
      }else{
        Path='Home'
      }

      return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>Please enter the Make, Model, and Year of the vehicle you are searching for...</Text>
        
          <View style={styles.inputContainer}>

            <View style={styles.inputBox}>
              <TextInput style={styles.inputS} id='userInput' placeholder="Input Make..." placeholderTextColor='#000' onChangeText={(userInput) => this.userInput = userInput} color='#000'></TextInput> 
            </View>
            
            <View style={styles.inputBox}>
              <TextInput style={styles.inputS} id='userInput2' placeholder="Input Model..." placeholderTextColor='#000' onChangeText={(userInput2) => this.userInput2 = userInput2} color='#000'></TextInput>
            </View>
            
            <View style={styles.inputBox}>
              <TextInput style={styles.inputS} id='userInput3' placeholder="Input Year..." placeholderTextColor='#000' onChangeText={(userInput3) => this.userInput3 = userInput3} color='#000'></TextInput>
            </View>

          </View>

          <Button
            title = 'Enter Data' 
            onPress={this._buttonAction}
          />

          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />

        </View>
      ); //End of return
    } //End of render

    //Button functionality
    _buttonAction = () => {
      //Navigates to testScreen, sending in parameters for make, model and year from user input
      this.props.navigation.navigate(Path, {
        make: this.userInput,
        model: this.userInput2,
        year: this.userInput3,
        sID: 1
      });
      
    }; //End of Button Functionality

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
      justifyContent: 'center',
      paddingHorizontal: 10
    },

    btext: {
      color: 'white'
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#CB4154',
      padding: 10,
      borderRadius: 400
    },

    inputContainer: {
      alignItems: 'center',
      paddingBottom: 30,
      paddingTop: 30
    },

    inputS: {
      paddingBottom: 15,
      paddingTop: 15,
      paddingLeft: 5,
      paddingRight: 5,
      borderColor: '#e21212',
      borderWidth: 1,
      width: 175
    },

    inputBox: {
      paddingTop: 5,
      paddingBottom: 5
    }

  });