import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class strains extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Kratom Strains',
        headerLeft: (
          <Button 
          onPress={() => navigation.openDrawer()}
          title="Info"
          />          
        )
      })

      render() {
          return(
            <SearchBar
                lightTheme
                round
                // onChangeText={}
                // onClearText={}
                placeholder='Search Strains...'
            />
          );
      }
}