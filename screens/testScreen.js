import React, { Component } from 'react'
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Slider,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import renderIf from '../components/renderIf';
import { WebBrowser } from 'expo';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

  //test screen
  export default class testScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };
    state = {
        p1: false,
        v1: 0,
        p2: false,
        v2: 0,
        p3: false,
        v3: 0,
        p4: false,
        v4: 0,
        p5: false,
        v5: 0,
        p6: false,
        v6: 0,
        p7: false,
        v7: 0,
        p8: false,
        v8: 0,
        p9: false,
        v9: 0,
        p10: false,
        v10: 0,
        p11: false,
        v11: 0,
        p12: false,
        v12: 0,
        value: 0.01,
      
      }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.bcontainer}>
            <TouchableHighlight
                selected={this.state.p1}
                selectedN={this.state.v1}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p1 && styles.buttonS]}
              onPress={() => this.setState({ p1: !this.state.p1,
                value: this.state.v1,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p2}
                selectedN={this.state.v2}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p2 && styles.buttonS]}
              onPress={() => this.setState({ p2: !this.state.p2,
                value: this.state.v2,
                p1: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p3}
                selectedN={this.state.v3}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p3 && styles.buttonS]}
              onPress={() => this.setState({ p3: !this.state.p3,
                value: this.state.v3,
                p2: false,
                p1: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p4}
                selectedN={this.state.v4}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p4 && styles.buttonS]}
              onPress={() => this.setState({ p4: !this.state.p4,
                value: this.state.v4,
                p2: false,
                p3: false,
                p1: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            </View>
            
            <View style={styles.bcontainer}>
            <TouchableHighlight
                selected={this.state.p5}
                v5={this.state.v5}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p5 && styles.buttonS]}
              onPress={() => this.setState({ p5: !this.state.p5,
                value: this.state.v5,
                p2: false,
                p3: false,
                p4: false,
                p1: false,
                p6: false,
                p7: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p6}
                selectedN={this.state.v6}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p6 && styles.buttonS]}
              onPress={() => this.setState({ p6: !this.state.p6,
                value: this.state.v6,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p1: false,
                p7: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p7}
                selectedN={this.state.v7}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p7 && styles.buttonS]}
              onPress={() => this.setState({ p7: !this.state.p7,
                value: this.state.v7,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p1: false,
                p8: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            <TouchableHighlight
                selected={this.state.p8}
                selectedN={this.state.v8}
                underlayColor={'#0018A8'}
              style={[styles.button, this.state.p8 && styles.buttonS]}
              onPress={() => this.setState({ p8: !this.state.p8,
                value: this.state.v8,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p1: false})}>
              <Text style={styles.btext}> Hot Dog </Text>
            </TouchableHighlight>
            </View>
            <View style={styles.sContainer}>
            {renderIf(this.state.p1, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v1: value,})}/>
                )}
                            {renderIf(this.state.p2, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v2: value,})}/>
                )}
                            {renderIf(this.state.p3, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v3: value,})}/>
                )}
                            {renderIf(this.state.p4, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v4: value,})}/>
                )}
                            {renderIf(this.state.p5, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v5: value,})}/>
                )}
                            {renderIf(this.state.p6, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v6: value,})}/>
                )}
                            {renderIf(this.state.p7, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v7: value,})}/>
                )}
                            {renderIf(this.state.p8, 
                <Slider
                  value={this.state.value}
                    onSlidingComplete={value => this.setState({ v8: value,})}/>
                )}

                <View style={styles.sliderF}>
                <Text style={styles.containerProducts}>Least</Text>
                <Text style={styles.containerProducts}>Most</Text>
                </View>
            </View> 
            <TouchableHighlight
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('Home',{
                sId: 404,});
                }}>
              <Text style={styles.btext}> No Hot Dog </Text>
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
      paddingHorizontal: 10
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    sContainer: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center"
  },

    btext: {
      color: 'white'
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#0247FE',
      padding: 10,
      borderRadius: 400,
      
    },
    buttonS: {
        alignItems: 'center',
        backgroundColor: '#0018A8',
        padding: 10,
        borderRadius: 400,
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