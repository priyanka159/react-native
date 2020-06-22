import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import Logo from './logo'
class Payment extends Component {
  render() {
    console.log("payment",this.props)
    return (
      <View style={styles.Container}>
        <Text style={styles.sucess}>Success</Text>

        <Logo pro={this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#24d49f",
  },
  sucess: {
    width: 89,
    height: 24,
    fontFamily: 'Lato',
    fontSize: 21,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 1.16,
    textAlign: 'center',
    color: '#ffffff',
    alignItems: 'center',
    marginLeft: 130,
    marginTop: 26,
  },
  button: {
    width: 270,
    height: 51,
    borderRadius: 25.5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});
export default Payment;
