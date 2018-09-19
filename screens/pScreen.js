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
import { ListItem, CheckBox, Slider } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

  //preferences screen
  export default class pScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
        value: 0.01
    };

    render() {

      const { navigation } = this.props;
      const screenId = navigation.getParam('sId', 'Invalid');

      return (
        <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={styles.textS}>ID: {JSON.stringify(screenId)}</Text>
            <Text style={styles.textS}>P: {JSON.stringify(Path)}</Text>
            <Text style={styles.textS}>bP: {JSON.stringify(bPath)}</Text>

          </View>

            <View style={styles.sContainer}>
                
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}/>

                <View style={styles.sliderF}>
                    <Text style={styles.containerProducts}>Least</Text>
                    <Text style={styles.containerProducts}>Most</Text>
                </View>

            </View>    

          <Text>Value: {this.state.value}</Text>

          <TouchableHighlight
            underlayColor={'#0018A8'}
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate(bPath, {sId: screenId});
            }}>

            <Text style={styles.btext}>Go Back</Text>

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
      paddingHorizontal: 10,
      justifyContent: 'center'
    },

    sContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    },

    contentContainer: {
      paddingTop: 30
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
        backgroundColor: '#0247FE',
        padding: 10,
        borderRadius: 400
      },

      sliderF: {
        flexDirection:'row',
        justifyContent : 'space-between'
      },

      containerProducts: {
        paddingTop: 40,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
      
  });