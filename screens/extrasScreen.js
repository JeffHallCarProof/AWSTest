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
import { ListItem, CheckBox } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import _, {debounce} from 'lodash';

  //extras screen
  export default class extrasScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      cb1: false,
      cb2: false,
      cb3: false,
      cb4: false,
      cb5: false,
      cb6: false,
      cb7: false,
      cb8: false,
      cb9: false,
      cb10: false,
      cb11: false,
      cb12: false,
      disabled: false,
    }

    render() {

      const { navigation } = this.props;
      this.state.disabled = navigation.getParam('disabled', false);
      const screenId = navigation.getParam('sId');
      const eventId = navigation.getParam('eId', 'Invalid');
      if(JSON.stringify(screenId)==1)
      {
        Path='No'
        bPath='Yes'
        rPath='Extras'
      } else{
        Path='Questions'
        bPath='No'
        rPath='Extras'
      }

      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.headingText}>Recommended</Text>
            <Text style={styles.textS}>eId: {JSON.stringify(eventId)}</Text>
              <CheckBox
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Heated Seats"
                checked={this.state.cb1}
                onPress={() => this.setState({ cb1: !this.state.cb1})}
              />
              <CheckBox
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'              
                title="Automatic E Braking"
                checked={this.state.cb2}
                onPress={() => this.setState({ cb2: !this.state.cb2})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Backup Camera / Parking Sensors"
                checked={this.state.cb3}
                onPress={() => this.setState({ cb3: !this.state.cb3})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Adjustable Seating and Steering"
                checked={this.state.cb4}
                onPress={() => this.setState({ cb4: !this.state.cb4})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Autonomous / Semi-Autonomous Driving"
                checked={this.state.cb5}
                onPress={() => this.setState({ cb5: !this.state.cb5})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Large Animal Detection"
                checked={this.state.cb6}
                onPress={() => this.setState({ cb6: !this.state.cb6})}
              />
              <Text style={styles.headingText}>Optional</Text>
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Next-Gen Forward Collision Warning"
                checked={this.state.cb7}
                onPress={() => this.setState({ cb7: !this.state.cb7})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Plugs and Outlets"
                checked={this.state.cb8}
                onPress={() => this.setState({ cb8: !this.state.cb8})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Rearview Cameras"
                checked={this.state.cb9}
                onPress={() => this.setState({ cb9: !this.state.cb9})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Keyless entry and ignition"
                checked={this.state.cb10}
                onPress={() => this.setState({ cb10: !this.state.cb10})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Leather seats/interior"
                checked={this.state.cb11}
                onPress={() => this.setState({ cb11: !this.state.cb11})}
              />
              <CheckBox                
                checkedIcon='check-circle-o'
                uncheckedIcon='circle-o'
                title="Full Sized Spare Tire"
                checked={this.state.cb12}
                onPress={() => this.setState({ cb12: !this.state.cb12})}
              />
        
              <View style={styles.bcontainer}>

                <Button
                  title="Go back"
                  onPress={_.debounce(() => {this._onPress(screenId,bId=1,eventId)},400)}
                />
                <TouchableHighlight
                  underlayColor={'#0018A8'}
                  style={styles.button}
                  onPress={_.debounce(() => {this._onPress(screenId,bId=0,eventId)},400)}
                >
                  <Text style={styles.btext}> Confirm </Text>
                </TouchableHighlight>
                
              </View>
          </ScrollView>
          
      ); //End of return
    } //End of render

    _onPress =_.throttle((screenId, bId,eventId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(bId)==1){
        if(JSON.stringify(screenId)==1)
        {
          Path='No'
          bPath='Yes'
          rPath='Extras'
        } else{
          Path='Questions'
          bPath='No'
          rPath='Extras'
        }
        this.props.navigation.navigate(bPath, {
          sId: screenId,disabled:false,Path: bPath, eId: eventId})
        
      } else{
        if(JSON.stringify(screenId)==1)
        {
          Path='No'
          bPath='Yes'
          rPath='Extras'
        } else{
          Path='Questions'
          bPath='No'
          rPath='Extras'
        }
        this.props.navigation.navigate(Path, {
          sId: screenId,eId: eventId})
      } 
    
    },1000,{leading:true, trailing:false});

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      justifyContent: 'center'
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 10
    },

    btext: {
      color: 'white'
    },

    headingText: {
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
      borderColor: '#1653bc',
      borderWidth: 1,
    }

  });
