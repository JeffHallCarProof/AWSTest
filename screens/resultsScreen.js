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
          <View style={styles.textView}>
            <Text style={styles.titleText}>Results Screen</Text>
          </View>
               
          <ScrollView horizontal={true} backgroundColor= '#568fea' pagingEnabled={true} 
            onContentSizeChange = {( width, height ) => { this.scrollViewContent_width = width }} 
            onScroll = { this.UpdateProgressBar } 
            onLayout = {(event) => this.scrollView_width = ( event.nativeEvent.layout.width )} 
            scrollEventThrottle = { 12 } showsHorizontalScrollIndicator={false}
          >
            <View style={styles.colContainer}>
            <Text style={styles.colText}> Comfort </Text>
            <Text style={styles.colText}> Fuel Economy </Text>
            <Text style={styles.colText}> Safety </Text>
            <Text style={styles.colText}> Reliability </Text>
            <Text style={styles.colText}> Environment </Text>
            <Text style={styles.colText}> Performance </Text>
            <Text style={styles.colText}> Style </Text>
            <Text style={styles.colText}> Cargo Space </Text>
            </View>


            <View style={styles.colContainer}>
            <Text style={styles.colText}> Comfort </Text>
            <Text style={styles.colText}> Fuel Economy </Text>
            <Text style={styles.colText}> Safety </Text>
            <Text style={styles.colText}> Reliability </Text>
            <Text style={styles.colText}> Environment </Text>
            <Text style={styles.colText}> Performance </Text>
            <Text style={styles.colText}> Style </Text>
            <Text style={styles.colText}> Cargo Space </Text>
            </View> 


            <View style={styles.colContainer}>
            <Text style={styles.colText}> Comfort </Text>
            <Text style={styles.colText}> Fuel Economy </Text>
            <Text style={styles.colText}> Safety </Text>
            <Text style={styles.colText}> Reliability </Text>
            <Text style={styles.colText}> Environment </Text>
            <Text style={styles.colText}> Performance </Text>
            <Text style={styles.colText}> Style </Text>
            <Text style={styles.colText}> Cargo Space </Text>
            </View>
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

          <View style={styles.Progressbutton}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('Home');}}
            >
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
      backgroundColor: '#568fea',
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
      paddingTop: 10,
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderColor: '#1653bc',
      borderWidth: 1,
      width: 375,
      height: 513,
    },

    carContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    ProgressBar_HolderView: {
      flexDirection: 'row',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 15,
      paddingLeft: 5,
      paddingRight: 47,
      paddingTop:10,
      backgroundColor: '#568fea',
      height: 45,
    },
    Progressbutton: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: '#568fea',
      height: 45,
    },

    Percentage: {
        position: 'absolute',
        right: 6,
        fontWeight: 'bold',
        color: 'white'
    },

    colText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        paddingTop: 20,
    },

    titleText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },

    textView: {
      paddingTop: 50,
      paddingBottom: 20,
      backgroundColor: '#568fea',
    }
    
});