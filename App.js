import React, {Component} from 'react';
import {Button, View} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './src/components/homeScreen/homeScreen';
import KratomInfo from './src/components/learnKratom/kratomInfo';
import Strains from './src/components/strains/strains';
import LoginScreen from './src/loginScreen/loginScreen';
import LoginScreen2 from './src/loginScreen/loginScreen2';

const AppNavigator = createStackNavigator({
  Close: LoginScreen,
  Home: HomeScreen,
  info: KratomInfo,
  strains: Strains,
  login: LoginScreen2
});

const MyDrawerNavigator = createDrawerNavigator({
  Close: {
    screen: AppNavigator,
  },
  Home: {
    screen: HomeScreen
  },
  info: {
    screen: KratomInfo,
  },
  strains: {
    screen: Strains
  },
  login: LoginScreen2
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends Component {

  render() {
    return (
      <MyApp />
      
    );
  }
}

