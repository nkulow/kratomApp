import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class loginScreen extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Sign In',
        headerLeft: (
          <Button 
          onPress={() => navigation.openDrawer()}
          title="Info"
          />          
        )
      })
    
   constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style = {styles.icon}>
        <Icon
                name = 'leaf'
                style = {styles.logo}
                size = {80} 
                color = '#AFE290'
            />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.inputIcon} 
            resizeMode="contain"
            size={28}
            name='envelope'
          />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Icon style={styles.inputIcon} 
          resizeMode="contain"
          size={28}
          name='key'
          />
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View flexDirection='row'>
            <TouchableOpacity style={styles.rowButtonContainer} onPress={() => this.onClickListener('restore_password')}>
                <Text style={styles.rowButtonText} >Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowButtonContainer} onPress={() => this.onClickListener('register')}>
                <Text style={styles.rowButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
        <View position='absolute' bottom={10}>
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} 
            onPress={() => this.props.navigation.navigate('Home')}
            >
            <Text style={styles.loginText}>Skip Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center',
    color: '#AFE290'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,

  },
  loginButton: {
    backgroundColor: '#AFE290',
  },
  loginText: {
    color: 'white',
  },
  icon: {
      position: 'absolute',
      top: 80,
      color: '#AFE290',
  },
  rowButtonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
   
  },
  rowButtonText: {
    color: '#5fc9f8'
  }
});
 