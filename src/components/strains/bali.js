import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ProgressViewIOS} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';

export default class bali extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
          this.setState({ indeterminate: false });
          setInterval(() => {
            progress = 0.6;
            this.setState({ progress });
          }, 500);
        }, 1500);
      }

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
                <Progress.Bar
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                    width={200}
                    height={20}
                    color='#AFE290'
                />
                <Progress.Bar
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                    width={200}
                    height={20}
                    color='#AFE290'
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
        height: 20,
        color: '#AFE290',
        
    }
})