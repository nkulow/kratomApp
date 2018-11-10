import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/components/homeScreen/homeScreen';
import KratomInfo from './src/components/learnKratom/kratomInfo';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  kratomInfo: KratomInfo
}, 
{
    initialRouteName: 'Home',
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 100,
  },
});