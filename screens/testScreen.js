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
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

export default class TestScreen extends React.Component {
    
    render() {

        const { navigation } = this.props;
        const make = navigation.getParam('make', 'Invalid');
        const model = navigation.getParam('model', 'Invalid');
        const year = navigation.getParam('year', 'Invalid');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Vehicle Details</Text>
                    <Text style={{fontSize: 18, paddingLeft: 50, paddingRight: 50}}>Listed below is the make, model and year of the vehicle you are searching for</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center'}}>
                
                    <Text style={styles.textS}>Make: {JSON.stringify(make)}</Text>
                    <Text style={styles.textS}>Model: {JSON.stringify(model)}</Text>
                    <Text style={styles.textS}>Year: {JSON.stringify(year)}</Text>

                    <Button
                        title = 'Confirm Vehicle Details' 
                        onPress={this._buttonAction}
                    />

                </View>

            </View>

        ); //End of return
    } //End of render

    //Button functionality
    _buttonAction = () => {
        //Navigates to extrasScreen, sending in parameters for make, model and year from user input
        this.props.navigation.navigate('Extras', {
          make: this.userInput,
          model: this.userInput2,
          year: this.userInput3,
        });

    }; //End of Button Functionality

} //End of class

//Component css
const styles = StyleSheet.create({
    
    textS: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 15
    }

});