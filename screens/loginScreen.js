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
import { ListItem, CheckBox, Slider } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import _, {debounce} from 'lodash';

  //login screen
  export default class loginScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
        disabled: false
    }

    render() {

        const { navigation } = this.props;
        this.state.disabled = navigation.getParam('disabled', false);
        const screenId = navigation.getParam('sId', 'Invalid');
        bPath = 'Preferences'
        rPath = 'Login'

  
        return (
            <View style={styles.container}>
            <View style={styles.bcontainer}>

            <View style={styles.inputContainer}>
                <Text>Username: </Text>
                <View style={styles.inputBox}>
                    <TextInput style={styles.inputS} id='username' placeholder="Enter username..." placeholderTextColor='#000' onChangeText={(username) => this.username = username} color='#000'></TextInput>
                </View>
               
                <Text>Password: </Text>
                <View style={styles.inputBox}>
                    <TextInput style={styles.inputS} id='password' placeholder="Enter password..." placeholderTextColor='#000' secureTextEntry={true}></TextInput>
                </View>
            </View>
                
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}>
                    <Text style={styles.btext}>Returning user login</Text>
                </TouchableHighlight>
                <Text></Text>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}>
                    <Text style={styles.btext}>Guest login</Text>
                </TouchableHighlight>
                <Button
                    title="Go back"
                    onPress={_.debounce(() => {this._onPress(screenId,bId=1)},400)}
                />

            </View>
            </View>
        ); //End of return
    } //End of render

    // set up functions as below but add debounce
    _onPress =_.throttle((screenId, bId) =>{ 
        this.state.disabled=true   
        if(JSON.stringify(bId)==1){
          bPath = 'Preferences'
          this.props.navigation.navigate(bPath, {
          sId: screenId,disabled:false})
        }
        else{
          Path = 'Results'
          this.props.navigation.navigate(Path, {
          sId: screenId,})
        } 
    },1000,{leading:true, trailing:false})

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
    },

    inputBox: {
        paddingTop: 5,
        paddingBottom: 5
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
    }

  });
