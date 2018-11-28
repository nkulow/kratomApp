import React, {Component} from 'react';
import {Button, View} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './src/components/homeScreen/homeScreen';
import KratomInfo from './src/components/learnKratom/kratomInfo';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  kratomInfo: KratomInfo,
}, 
{
    // initialRouteName: 'Home',
    // navigationOptions: {
    //   headerStyle : {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerRight: (
    //       <Button 
    //       onPress={() => alert('this is a button')}
    //       title="Info"
    //       color="black"
    //       />  
    //   ),
    //  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppNavigator,
  },
  Info: {
    screen: KratomInfo,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

// const AppContainer = createAppContainer(AppNavigator);

// const AppStack = StackNavigator({ RootStack : { screen: RootStack} });

export default class App extends Component {

  render() {
    return (
      <MyApp />
      
    );
  }
}

