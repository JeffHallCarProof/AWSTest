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
import { LinearGradient } from 'expo';

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
        
   

          <View style={styles.bcontainer}>
          <LinearGradient
        colors={['#65B2EE','#8FCAF3','#8FCAF3','#65B2EE','#65B2EE','#8FCAF3','#65B2EE',]}
        start={{x:0.2,y:0.8}}
        end={{x:0.8,y:0.2}}
        style={{ flex:1 }}
        justifyContent={'center'}>

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
</LinearGradient>
          </View>
  
      ); //End of return
    } //End of render

    _onPress =_.throttle((screenId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(screenId)==0){
        Path ='No'
      } else{
        Path='Yes'
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
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'stretch',
      justifyContent: 'center',
      
    },

    btext: {
      color: 'white'
    },

    button: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent:'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
      borderColor: '#1653bc',
      borderWidth: 1,
      width: 60,
    },


    qText: {
      paddingBottom: 40,
      paddingLeft: 25,
      paddingRight: 25,
      fontSize: 18,
      color:'#FFFFFF',
      alignItems: 'center',
      alignSelf: 'center',
    }

  });