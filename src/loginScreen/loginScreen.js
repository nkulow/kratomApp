import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class strains extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Log In'
    })

    render() {
        return(
            <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title= 'Click Me'
           />
        )
    }
}