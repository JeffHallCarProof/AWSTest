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

  //preferences screen
  export default class loginScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

        const { navigation } = this.props;
  
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
                    onPress={() => {this.props.navigation.navigate('Home');
                    }}>
                    <Text style={styles.btext}>Returning user login</Text>
                </TouchableHighlight>
                <Text></Text>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Home');
                    }}>
                    <Text style={styles.btext}>Guest login</Text>
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