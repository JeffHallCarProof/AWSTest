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
    }

    render() {

      const { navigation } = this.props;
      const itemId = navigation.getParam('eId', 'NO-ID');
      const screenId = navigation.getParam('sId');
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
        <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text h2>Recommened</Text>
          <Text style={styles.textS}>ID: {JSON.stringify(screenId)}</Text>
          <Text style={styles.textS}>P: {JSON.stringify(Path)}</Text>
          <Text style={styles.textS}>bP: {JSON.stringify(bPath)}</Text>
              <CheckBox
                title="Item1"
                checked={this.state.cb1}
                onPress={() => this.setState({ cb1: !this.state.cb1})}
              />
              <CheckBox
                title="Item2"
                checked={this.state.cb2}
                onPress={() => this.setState({ cb2: !this.state.cb2})}
              />
              <CheckBox
                title="Item3"
                checked={this.state.cb3}
                onPress={() => this.setState({ cb3: !this.state.cb3})}
              />
              <CheckBox
                title="Item4"
                checked={this.state.cb4}
                onPress={() => this.setState({ cb4: !this.state.cb4})}
              />
              <CheckBox
                title="Item5"
                checked={this.state.cb5}
                onPress={() => this.setState({ cb5: !this.state.cb5})}
              />
              <CheckBox
                title="Item6"
                checked={this.state.cb6}
                onPress={() => this.setState({ cb6: !this.state.cb6})}
              />
              <Text h2>Optional</Text>
              <CheckBox
                title="Item7"
                checked={this.state.cb7}
                onPress={() => this.setState({ cb7: !this.state.cb7})}
              />
              <CheckBox
                title="Item8"
                checked={this.state.cb8}
                onPress={() => this.setState({ cb8: !this.state.cb8})}
              />
              <CheckBox
                title="Item9"
                checked={this.state.cb9}
                onPress={() => this.setState({ cb9: !this.state.cb9})}
              />
              <CheckBox
                title="Item10"
                checked={this.state.cb10}
                onPress={() => this.setState({ cb10: !this.state.cb10})}
              />
              <CheckBox
                title="Item11"
                checked={this.state.cb11}
                onPress={() => this.setState({ cb11: !this.state.cb11})}
              />
              <CheckBox
                title="Item12"
                checked={this.state.cb12}
                onPress={() => this.setState({ cb12: !this.state.cb12})}
              />
        
              <View style={styles.bcontainer}>
                <TouchableHighlight
                  underlayColor={'#0018A8'}
                  style={styles.button}
                  onPress={_.debounce(() => {        this.props.navigation.navigate(Path, {
                    sId: screenId,})},500)}
                    >
                  <Text style={styles.btext}> Confirm </Text>
                </TouchableHighlight>
                
            <Button
            title="Go back"
            onPress={() => {
              this.props.navigation.navigate(bPath, {
                sId: screenId, Path: rPath});
              }}
          />
          </View></ScrollView>
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

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
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