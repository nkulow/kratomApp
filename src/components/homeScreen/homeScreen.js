import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class homeScreen extends Component {
      static navigationOptions = {
        title: 'Home',
        headerLeft: (
          <Button 
          onPress={() => this.props.navigation.openDrawer()}
          title="Info"
          />          
        )
      }

    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to KratomApp!</Text>
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
    welcome: {
      fontSize: 30
    },
    button: {

    }

  });

  // const infoButton = (props) => {
  //   return(
  //     <View>
  //     <Button 
  //     onPress={() => this.props.navigation.openDrawer()}
  //     title='info'
  //     />
  //   </View>
  //   )
  // }
    