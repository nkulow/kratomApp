import React, {Component} from 'react';
import {Button, View} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './src/components/homeScreen/homeScreen';
import KratomInfo from './src/components/learnKratom/kratomInfo';
import Strains from './src/components/strains/strains';
import LoginScreen from './src/loginScreen/loginScreen';

const AppNavigator = createStackNavigator({
  DONT: LoginScreen,
  Home: HomeScreen,
  info: KratomInfo,
  strains: Strains,
},
  
  
);

const MyDrawerNavigator = createDrawerNavigator({
  DONT: {
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
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends Component {

  render() {
    return (
      <MyApp />
      
    );
  }
}

