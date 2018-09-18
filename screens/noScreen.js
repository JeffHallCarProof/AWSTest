import React, { Component } from 'react'
import {
    Image,
    Div,
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
import { ButtonGroup } from 'react-native-elements';

// Screen for people who do not know what car they want
export default class noScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
      return (
          <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
          Please select a Life Event!
          </Text>
          </View>
            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('Extras', {
                  eId: 1,});
                }}
              >
                <Text style={styles.btext}> E1 </Text>
              </TouchableHighlight>
              
                <Text> </Text>
              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('Test', {
                  eId: 2,});
                }}
              >
                <Text style={styles.btext}> E2 </Text>
              </TouchableHighlight>

              <Text> </Text>
              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('Test', {
                  eId: 3,});
                }}
              >
                <Text style={styles.btext}> E3 </Text>
              </TouchableHighlight>

              </View>
              <View style={styles.bcontainer}>

              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('Test', {
                  eId: 4,});
                }}
              >
                <Text style={styles.btext}> E4 </Text>
              </TouchableHighlight>              
              <Text> </Text>
              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('Test', {
                  eId: 5,});
                }}
              >
                <Text style={styles.btext}> E5 </Text>
              </TouchableHighlight>
              <Text> </Text>
              <TouchableHighlight
                underlayColor={'maroon'}
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('Test', {
                  eId: 6,});
                }}
              >
                <Text style={styles.btext}> E6 </Text>
              </TouchableHighlight>  
              </View>                          
            <View>
            <Button 
            title="Go back"
            onPress={() => {this.props.navigation.goBack()
            }}
          />
          </View>
          </View> 
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 0
    },
    contentContainer: {
      paddingTop: 40,
    },
    bcontainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      flexDirection: 'row'
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
    /* Clear floats (clearfix hack) look into after
    ButtonGroup:after {
      content: "",
      clear: both,
      display: table
}, 
*/
  });