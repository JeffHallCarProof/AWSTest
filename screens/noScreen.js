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
import _, {debounce} from 'lodash';
// Screen for people who do not know what car they want
export default class noScreen extends React.Component {

    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
      };
      state={
        disabled: false,
            };
    render() {

      const { navigation } = this.props;
      this.state.disabled = navigation.getParam('disabled', false);
      const screenId = navigation.getParam('sId', 'Invalid');
      if(JSON.stringify(screenId)==0){
        Path ='Extras'
        bPath ='Home'
        rPath='No'
      } else{
        Path='Preferences'
        bPath='Extras'
        rPath='No'
      } 


      return (
          <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
                Please select a Life Event!
              </Text>
            </View>
            <Text style={styles.textS}>ID: {JSON.stringify(screenId)}</Text>
            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                eId={'1'}
                onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
              >
                <Text style={styles.btext}> E1 </Text>
              </TouchableHighlight>
              
                <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                eId={'2'}
                onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
              >
                <Text style={styles.btext}> E2 </Text>
              </TouchableHighlight>

              <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                eId={'3'}
                onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
              >
                <Text style={styles.btext}> E3 </Text>
              </TouchableHighlight>

              </View>
              <View style={styles.bcontainer}>

              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                eId={'4'}
                onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
              >
                <Text style={styles.btext}> E4 </Text>
              </TouchableHighlight>              
              <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                eId={'5'}
                onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
              >
                <Text style={styles.btext}> E5 </Text>
              </TouchableHighlight>
              <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                eId={'6'}
                onPress={_.debounce(() => {this._onPress(screenId,bId=0)},400)}
              >
                <Text style={styles.btext}> E6 </Text>
              </TouchableHighlight>  
              </View>                          
            <View>
            <Button
            title="Go back"
            onPress={_.debounce(() => {this._onPress(screenId,bId=1)},400)}
          />
          </View>
          </View> 
      ); //End of return
    } //End of render
    _onPress =_.throttle((screenId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(bId)==1){
        if(JSON.stringify(screenId)==0){
          Path ='Extras'
          bPath ='Home'
          rPath='No'
        } else{
          Path='Preferences'
          bPath='Extras'
          rPath='No'
        } 
        this.props.navigation.navigate(bPath, {
          sId: screenId,disabled:false, Path: bPath})
        }else{    
            if(JSON.stringify(screenId)==0){
            Path ='Extras'
            bPath ='Home'
            rPath='No'
          } else{
            Path='Preferences'
            bPath='Extras'
            rPath='No'
          } 
          this.props.navigation.navigate(Path, {
            sId: screenId,})
        } 
      
      },1000,{leading:true, trailing:false});
  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 0
    },

    contentContainer: {
      paddingTop: 40
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
    }

});