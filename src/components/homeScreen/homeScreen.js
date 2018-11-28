import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class homeScreen extends Component {
      static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: (
          <Button 
          onPress={() => navigation.openDrawer()}
          title="Info"
          />          
        )
      })

    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to KratomApp!</Text>
        <Button 
              icon={
                <Icon 
                name='arrow-right'
                size={15}
                color='red'
                />}
                onPress={() => this.props.navigation.navigate('info')}
                // style={styles.button}
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

    