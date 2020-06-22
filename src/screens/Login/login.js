
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import logo from '../../imagess/a.png';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.loginformContainer}>

        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Text>
        <TextInput placeholder="Email id" style={styles.textinput} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textinput}
        />
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Payment')}}
          style={{
            width: 293,
            height: 52,
            marginTop: 10,
            borderRadius: 3,
            marginBottom:32,
            backgroundColor: '#fb345c',
      
          }}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableHighlight>
        <Text style={styles.forgetPass}>Forget password?</Text>
    
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.noText}> Dont have an account?{' '}</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={{marginTop:95}}><Text style={styles.RegisterWith}>REGISTER WITH US</Text></TouchableOpacity>
            {/* <Text style={styles.RegisterWith} onpress={()=>alert('hello')}>REGISTER WITH US</Text> */}
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginformContainer: {
    flex: 1,
    alignItems:"center"
  },
  logo: {
    marginTop:92,
    width: 190,
    height: 37,
    marginLeft:20
  },
  logoText: {
    width: 292,
    height: 48,
    marginVertical: 23,
    fontFamily: 'OpenSans',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    textAlign: 'center',
    color: '#7a7a7a',
  },
  textinput: {
    paddingLeft:20,
    width: 293,
    height: 46,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dfdfdf',
    marginVertical: 5
  },
  textButton: {
    alignItems: 'center',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    padding: 15,
    color: '#ffffff',
  
  },
  forgetPass: {
    opacity: 0.86,
    fontFamily: 'OpenSans',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 1.3,
    textAlign: 'center',
    color: '#454545'
  },
  noText: {
    textAlign: 'left',
    width: 165,
    height: 19,
    fontFamily: 'OpenSans',
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#969696',
    marginTop:95
  },
  RegisterWith: {
    width: 130,
    height: 19,
    fontFamily: 'OpenSans',
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#fb345c',
    position:"relative"
  },
});
export default Login;
