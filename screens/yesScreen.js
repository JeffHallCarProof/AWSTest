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
    View
  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import _, {debounce} from 'lodash';
import ModalDropdown from 'react-native-modal-dropdown';

  //screen for people who do know what car they want
  export default class yesScreen extends React.Component {

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
      const screenId = navigation.getParam('sId', 'Invalid');

      Path='Extras'
      bPath='Home'
      rPath='Yes'

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
          
            <View style={styles.dropDownView}>
              <ModalDropdown dropdownStyle={styles.dropDownList} textStyle={styles.dropDownText} dropdownTextStyle={styles.optionText} 
              dropdownTextHighlightStyle={styles.selectedOption} defaultValue="Select a year..." 
              options={[
                '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010',
                '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000',
                '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990',
                '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980',                 
              ]}
              />
            </View>

          </View>

          <Button
            title = 'Enter Data' 
            onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
          />

            <Button
            title="Go back"
            onPress={_.debounce(() => {this._onPress(screenId,bId=1)},400)}
          />

        </View>
      ); //End of return
    } //End of render

    // set up functions as below but add debounce
    _onPress =_.throttle((screenId, bId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(bId)==1){
        this.props.navigation.navigate(bPath, {
          sId: screenId,
          disabled:false,
          make: this.userInput,
          model: this.userInput2,
          year: this.userInput3,})
      } else{
        this.props.navigation.navigate(Path, {
          sId: screenId,
          disabled:false,
          make: this.userInput,
          model: this.userInput2,
          year: this.userInput3,})
      }
      
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
      justifyContent: 'center',
      paddingHorizontal: 10
    },

    btext: {
      color: 'white'
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
      borderColor: '#1653bc',
      borderWidth: 1,
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
      borderColor: '#246ee5',
      borderWidth: 1,
      width: 175,
      fontSize: 16
    },

    inputBox: {
      paddingTop: 5,
      paddingBottom: 5
    },

    dropDownView: {
      paddingBottom: 15,
      paddingTop: 15,
      borderWidth: 1,
      borderColor: '#246ee5',
      width: 175
    },

    dropDownText: {
      paddingLeft: 5,
      fontSize: 16
    },
    
    dropDownList: {
      width: 175
    },

    optionText: {
      fontSize: 14,
      paddingLeft: 15
    },

    selectedOption: {
      fontWeight: 'bold',
      backgroundColor: '#adb2ba'
    }

  });