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
        value: 0.01
    };
    render() {
      const { navigation } = this.props;
      const screenId = navigation.getParam('sId', 'Invalid');
      Path ='Preferences'
      bPath ='Extras'
      rPath='Questions'
        return (
          <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
          Hot Dog!
          </Text>
          <Text style={styles.textS}>ID: {JSON.stringify(screenId)}</Text>
          <Text style={styles.textS}>P: {JSON.stringify(Path)}</Text>
          <Text style={styles.textS}>bP: {JSON.stringify(bPath)}</Text>
          </View>
                  <Text>The hot dog or dog (also spelled hotdog) is a grilled or steamed link-sausage sandwich where the sausage is served in the slit of a special hot dog bun, 
                      a partially sliced bun. 
                      It can also refer to just the sausage (the wurst or wörst) of its composition. 
                      Typical sausages include wiener (Vienna sausage), frankfurter (or frank), or knackwurst. 
                      The names of these sausages also commonly refer to their assembled sandwiches </Text>

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
            onPress={() => {
              this.props.navigation.navigate(bPath, {
                sId: screenId, Path: rPath});
              }}
          />
                <Text> </Text>
                <TouchableHighlight
                  underlayColor={'#0018A8'}
                  style={styles.button}
                  onPress={_.debounce(() => {        this.props.navigation.navigate(Path, {
                    sId: screenId,})},500)}
                >
                  <Text style={styles.btext}> Hot Dog </Text>
                </TouchableHighlight>
                

                </View>
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
            backgroundColor: '#0247FE',
            padding: 10,
            borderRadius: 400
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