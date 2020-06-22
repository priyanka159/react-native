import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import logo from '../imagess/a.png';
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.loginformContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Text>
        <TextInput placeholder="Email id" style={styles.textinput} />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textinput}
        />
        <TouchableOpacity
          style={{
            width: 288,
            height: 49,
            marginVertical: 10,
            borderRadius: 3,
            backgroundColor: '#fb345c',
          }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginformContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 178,
    height: 35,
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
    width: 291,
    height: 44,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dfdfdf',
    marginVertical: 5,
  },
  textButton: {
    alignItems: 'center',
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
  },
});
export default Form;
