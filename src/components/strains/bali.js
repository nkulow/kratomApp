import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ProgressViewIOS} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class bali extends Component {
    
    
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Bali',
        headerLeft: (
            <Icon
                onPress={() => navigation.goBack()}
                name = 'chevron-left'
                style = {styles.icon}
                size = {28}

            />
        )
    })
    render(){
        return(
            <View>
                <Text> This is the bali strain </Text>
                <ProgressViewIOS style={styles.progressBar} 
                    trackTintColor='#AFE290'
                    progress = {0.5}
                    accessibilityRole = 'text'
                />
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 60,
        height: 40,
        paddingLeft: 8,
        color: '#AFE290',
        marginTop: 15
    },
    progressBar:{
        width: 200,
        height: 30,
        transform: [{ scaleX: 1.0 }, { scaleY: 5.0 }],
        
    }
})