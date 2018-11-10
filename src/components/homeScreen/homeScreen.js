import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


import KratomInfo from './src/components/learnKratom/kratomInfo';

export default class homeScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
        <Text>Welcome to KratomApp!</Text>
        <Button 
                onPress={() => this.props.navigation.navigate('kratomInfo')}
                style={styles.button}
                title="Learn about Kratom"
            />
      </View>
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