import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class bali extends Component {
    
    
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Bali',
        headerLeft: (
            <Icon
                onPress={() => navigation.goBack()}
                name = 'chevron-left'
                style = {styles.icon}
                size = {22}

            />
        )
    })
    render(){
        return(
            <Text> This is the bali strain </Text>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        paddingLeft: 5,
        color: '#AFE290'
    }
})