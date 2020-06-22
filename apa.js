import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import Form from './src/components/form';
import log from './src/imagess/previous.png';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
        backgroundColor="grey"
barStyle="light-content"
        /> */}
        {/* For header login */}
        <View style={styles.loginContainer}>
          <Image source={log} style={styles.previous} />
          <Text style={styles.loginText}>Login</Text>
        </View>
        {/* <Image style={styles.logo} source={require('./src/imagess/a')}/> */}
        <Form />
        <Text style={styles.forgetPass}>Forget password?</Text>
        <View style={styles.signup}>
          <Text style={{flexDirection: 'row'}}>
            Dont have an account?{' '}
            <Text style={styles.RegisterWith}>REGISTER WITH US</Text>
          </Text>
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
    backgroundColor: '#fff',
  },
  loginContainer: {
    width: 360,
    height: 60,
    backgroundColor: '#ffffff',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#000000',
    fontFamily: 'Lato',
  },
  previous: {
    width: 20.4,
    height: 12.9,
    marginTop: 23,
    marginLeft: 25,
  },
  path: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35.1,
    height: 34.6,
    backgroundColor: '#ff4757',
  },
  forgetPass: {
    marginBottom: 167,
    opacity: 0.86,
    fontFamily: 'OpenSans',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 1.1,
    textAlign: 'center',
    color: '#454545',
  },
  signup: {
    marginBottom: 45,
  },
  noText: {
    textAlign: 'left',
    width: 150,
    height: 19,
    fontFamily: 'OpenSans',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#969696',
  },
  RegisterWith: {
    width: 123,
    height: 19,
    fontFamily: 'OpenSans',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#fb345c',
  },
});
