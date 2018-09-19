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

  //test screen
  export default class testScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };
    state = {
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
        p7: false,
        p8: false,
        p9: false,
        p10: false,
        p11: false,
        p12: false,
      }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.bcontainer}>
            <TouchableHighlight
                selected={this.state.p1}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p1 && styles.buttonS]}
              onPress={() => this.setState({ p1: !this.state.p1})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p2}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p2 && styles.buttonS]}
              onPress={() => this.setState({ p2: !this.state.p2})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p3}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p3 && styles.buttonS]}
              onPress={() => this.setState({ p3: !this.state.p3})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('Home',{
                sId: 404,});
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
      borderRadius: 400,
      
    },
    buttonS: {
        alignItems: 'center',
        backgroundColor: '#0018A8',
        padding: 10,
        borderRadius: 400,
      }

  });