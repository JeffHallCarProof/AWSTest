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

  //results screen
  export default class resultsScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

        const { navigation } = this.props;
  
        return (
            
            <View style={styles.bcontainer}>
                <Text>Results Screen</Text>
                <Text></Text>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Home');
                    }}>
                    <Text style={styles.btext}>Home</Text>
                </TouchableHighlight>
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