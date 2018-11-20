import React, {Component} from 'react';
import {Button} from 'react-native';
import { createDrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './src/components/homeScreen/homeScreen';
import KratomInfo from './src/components/learnKratom/kratomInfo';

const RootStack = createDrawerNavigator({
  Home: HomeScreen,
  kratomInfo: KratomInfo,
}, 
{
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle : {
        backgroundColor: '#f4511e',
      },
      headerRight: (
        <Button 
        onPress={() => this.props.navigation.openDrawer}
        title="Info"
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
        },
      }
});

const AppStack = StackNavigator({ RootStack : { screen: RootStack} });

export default class App extends Component {
  render() {
    return (
      <AppStack />
    );
  }
}

