import React, {Component} from 'react';
import {StatusBar, Platform, StyleSheet, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Container, Content, Header, Left, Right, Body, Icon, Text, Button, Title, Fab} from 'native-base';
import Fabs from './src/components/Fabs';
import Homepage from './src/components/Homepage';
import Login from './src/components/Login';
import Registration from './src/components/Registration';
import FooterSection from './src/components/FooterSection';

const RootStack = StackNavigator(
  {
    Login: {screen: Login},
    Index: {screen: Homepage},
    Registration: {screen: Registration},
  },
  {
    initialRouteName: 'Login'
  }
);

type Props = {};
export default class App extends Component<Props> {
  state = {
    active: 'true' 
  }
  render() {
    return (
      <Container>
        <RootStack />
        {/* <Header /> */}
        {/* <Login /> */}
        {/* <Registration /> */}
        {/* <Cards /> */}
        {/* <Fabs /> */}
        {/* <FooterSection /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#308239',
    backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,124,75,1) 35%, rgb(56, 132, 54) 100%)',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
