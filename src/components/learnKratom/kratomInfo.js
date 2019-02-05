import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class kratomInfo extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: 'About Kratom',
        headerLeft: (
            <Icon 
            onPress={() => navigation.openDrawer()}
            name = 'bars'
            style = {styles.barIcon}
            size = {24}        
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
    },
    barIcon: {
        width: 20,
        height: 20,
        paddingLeft: 5,
        color: '#AFE290',     
    },
})