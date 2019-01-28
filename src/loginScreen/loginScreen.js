import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    TouchableOpacity, 
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const background = require("/Users/Kulow/react-native/KratomApp/src/assets/3234628aa2a06d79c8e598812334f28316b6c29468b5f0e41f306276f2a66298-810x536.jpg");

export default class loginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    static navigationOptions = () => ({
        header: null
    })

    render() {
        return(
            
            // <ImageBackground
            //     style={[styles.background, styles.container]}
            //     source={background}
            //     resizeMode="cover"
            // >   
        <View>
            <View>
        <Icon
            name = 'leaf'
            style = {styles.logo}
            size = {40} 
        />
        </View>
            <View style={styles.containter} />

            <View style={styles.wrapper}>
                <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                    <Icon 
                        name= "user-circle"
                        style={styles.icon}
                        size={20}
                    />
                </View>
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                    <Icon 
                        name= "lock"
                        style={styles.icon}
                        resizeMode="contain"
                        size={24}
                    />
                </View>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        style={styles.input}
                        underlineColorAndroid="transparent"
                    />
                </View>
            <TouchableOpacity activeOpacity={1.5}>
                <View style= {styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1.5}>
                <View>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </View>
            </TouchableOpacity>

             </View>
             
            <View style={styles.containter} />
            <View>
            <TouchableOpacity activeOpacity={1.5}>
                <View style={styles.skipLogin}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title= 'Skip Login'
                    />
                </View>
            </TouchableOpacity>
            </View>
    </View>
        //    </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({ 
    containter: {
        flex: 1,
        alignItems:'center',
        paddingTop: 50
    },
    skipLogin: {
        color: "#FFF",
        backgroundColor: "transparent",
        textAlign: "center", 
        paddingBottom: 15
        
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
    background: {
        width: "100%",
        height: "100%",
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        backgroundColor: "transparent"
    },
    wrapper: {
        padding: 15
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d73352"
    },
    icon: {
        width: 20,
        height: 20,
        color: "#FFF"
    },
    button: {
        backgroundColor: "#d73352",
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18
    },
    forgotPass: {
        
        backgroundColor: "transparent",
        textAlign: "center"
    },
    logo: {
        width: 50,
        height: 50,
        color: '#AFE290',
        alignItems: 'center',
        paddingTop: 200,
        flex: 1
    }
})