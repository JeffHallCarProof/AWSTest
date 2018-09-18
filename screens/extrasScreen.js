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

  //home screen
  export default class HomeScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    state = {
        cb1: false,
        cb2: false,
      }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('eId', 'NO-ID');


      return (
        <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
<View>
              <CheckBox
                title="Item1"
                checked={this.state.cb1}
                onPress={() => this.setState({ cb1: !this.state.cb1})}
              /></View>

              <CheckBox
                title="Item2"
                checked={this.state.cb2}
                onPress={() => this.setState({ cb2: !this.state.cb2})}
              />
        </ScrollView>
        </View>
      );
    }
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      justifyContent: 'center'
    },
    contentContainer: {
      paddingTop: 30,
    },
  });