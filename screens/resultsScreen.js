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
    ProgressBarAndroid,
    ProgressViewIOS 
  } from 'react-native';
import { ListItem, CheckBox, Slider } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

const width = 375
  //results screen
  export default class resultsScreen extends React.Component {

    constructor()
    {
        super();
 
        this.state = { 
          
          progress_count: 0 
        
        }

        this.scrollView_width = 0;
 
        this.scrollViewContent_width = 0;
    }
 
    UpdateProgressBar = (progress) =>
      {
        this.setState({ progress_count: Math.abs( progress.nativeEvent.contentOffset.x / ( this.scrollViewContent_width - this.scrollView_width ))});
      }

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

        const { navigation } = this.props;
  
        return (
            
            <View style={styles.bcontainer}>
            <Text> </Text>
            <Text> </Text>
               <Text>Results Screen</Text>
                <ScrollView horizontal={true} backgroundColor= '#246ee5' pagingEnabled={true} 
                onContentSizeChange = {( width, height ) => { this.scrollViewContent_width = width }} 
                onScroll = { this.UpdateProgressBar } 
                onLayout = {(event) => this.scrollView_width = ( event.nativeEvent.layout.width )} 
                scrollEventThrottle = { 12 } >
                    <View style={styles.colContainer}><Text> Column 1 </Text><Text> Column 1 </Text><Text> Column 1 </Text></View>
                    <View style={styles.colContainer}><Text> Column 2 </Text></View> 
                    <View style={styles.colContainer}><Text> Column 3 </Text></View>
                </ScrollView>
                <View style = { styles.ProgressBar_HolderView }>
                {   
                    ( Platform.OS === 'android' )
                    ?
                        (
                            <ProgressBarAndroid
                              styleAttr = "Horizontal"
                              progress = { this.state.progress_count }
                              color = "#fff"
                              indeterminate = { false }
                              style = {{ width: '100%' }}
                            />
                        )
                    :
                        (
                            <ProgressViewIOS
                              progressTintColor = "#fff"
                              style = {{ width: '100%' }}
                              progress = { this.state.progress_count }
                            />
                        )
                }
                    <Text style = { styles.Percentage }> { Math.round( this.state.progress_count * 100 ) }% </Text>
                </View>
                <View paddingBottom={75} paddingTop={20}>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Home');
                    }}>
                    <Text style={styles.btext}>Home</Text>
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
      justifyContent: 'space-evenly'
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

    colContainer: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      borderColor: '#FFF',
      borderWidth: 1,
      width: 375
    },

    carContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    ProgressBar_HolderView:
    {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      paddingLeft: 20,
      paddingRight: 50,
      backgroundColor: '#246ee5',
      height: 50,
    },

    Percentage:
    {
        position: 'absolute',
        right: 6,
        fontWeight: 'bold',
        color: 'white'
    }
});