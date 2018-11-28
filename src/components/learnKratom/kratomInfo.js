import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class kratomInfo extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: 'About Kratom',
        headerLeft: (
          <Button 
          onPress={() => navigation.openDrawer()}
          title="Info"
          />          
        )
      })

    render (){
        return (
            <View style={styles.container}>
                <Text>Kratom is cool</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        padding: 50
    }
})