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
  import _, {debounce} from 'lodash';

  //question screen
  export default class qScreen extends React.Component {
    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };
    state = {
        value: 0.00,
        disabled: false
    };
    render() {
      const { navigation } = this.props;
      this.state.disabled = navigation.getParam('disabled', false);
      const screenId = navigation.getParam('sId', 'Invalid');
      const eventId = navigation.getParam('eId', 'Invalid');
      Path ='Preferences'
      bPath ='Extras'
      rPath='Questions'
        return (
          <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
          Questions
          </Text>
          <Text style={styles.textS}>eId: {JSON.stringify(eventId)}</Text>
          </View>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>

                <View style={styles.sContainer}>
                <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
                <View style={styles.sliderF}>
                <Text style={styles.containerProducts}>Least</Text>
                <Text style={styles.containerProducts}>Most</Text>
                </View>
                </View>  

                <Text>
          Value: {this.state.value}
        </Text>
                <View style={styles.bcontainer}>
                <Button
                  title="Go back"
                  onPress={_.debounce(() => {this._onPress(screenId,bId=1,eventId)},400)}
                />
                <Text> </Text>
                <TouchableHighlight
                  underlayColor={'#0018A8'}
                  style={styles.button}
                  onPress={_.debounce(() => {this._onPress(screenId,bId=0,eventId)},400)}
                >
                  <Text style={styles.btext}> Confirm </Text>
                </TouchableHighlight>
                

                </View>
            </View>
    
        ); //End of return
      } //End of render
    
      // set up functions as below but add debounce
      _onPress =_.throttle((screenId, bId,eventId) =>{ 
        this.state.disabled=true   
        if(JSON.stringify(bId)==1){
          bPath = 'Extras'
          this.props.navigation.navigate(bPath, {
          sId: screenId,disabled:false,eId: eventId})
        }
        else{
          Path = 'Preferences'
          this.props.navigation.navigate(Path, {
          sId: screenId,eId: eventId})
        } 
      },1000,{leading:true, trailing:false})

    } //End of class
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
          paddingTop: 30,
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
            color: 'white',
          },
          button: {
            alignItems: 'center',
            backgroundColor: '#1294EF',
            padding: 10,
            borderRadius: 4,
            borderColor: '#1653bc',
            borderWidth: 1,
          },
          sliderF: {
            flexDirection:'row',
            justifyContent : 'space-between'
          },
          containerProducts: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            },
          
      });
