import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,TouchableHighlight} from 'react-native';
import logo from '../../imagess/a.png'
import {Picker,Form} from 'native-base'

class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      selected:""
    };
  }

  onValueChange(value,string) {//value,index
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
         <Image source={logo} style={styles.logo} />
        <Text style={styles.registrationWith}>Registration with Us</Text>
        <Text style={styles.lorenText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Text>
        <View style={styles.textinput}>
        <Picker
              mode="dropdown"
              style={{width:280,color:"#7a7a7a",marginLeft:2,position:'absolute',height:40,fontSize:12}}
              placeholder="Country"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
  
              <Picker.Item label="Business Category" value="" />
              <Picker.Item label="Trade Category" value="key1" />
            </Picker>
        </View>
        <TextInput placeholder="Password"  secureTextEntry={true}  style={styles.textinput} />
        <TextInput placeholder="Confirm Password"  secureTextEntry={true} style={styles.textinput} />
        <TextInput placeholder="Business Address" style={styles.textarea}
    // multiline={true}
    // numberOfLines={4}
    // onChangeText={(text) => this.setState({text})}
   // value={this.state.text}
    />
       
         <TouchableHighlight
          style={{
            width: 288,
            height: 49,
            marginTop:71,
            borderRadius: 3,
            backgroundColor: '#fb345c',
            marginLeft:37
          }}>
          <Text style={styles.textButton}>GREAT YOU'RE DONE! SUBMIT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Register2
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  logo: {
    width: 178,
    height: 35,
    marginLeft:100,
    marginTop:38
  },
  registrationWith:{
    marginTop:20,
    marginLeft:106,
    marginBottom:4,
    width: 156,
  height: 22,
  fontFamily: "Lato",
  fontSize: 17,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center"
  },
  lorenText:{
    marginLeft:34,
    marginBottom:27,
    width: 292,
    height: 38,
    fontFamily: "OpenSans",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#7a7a7a"
  
  },
  textButton:{
    alignItems: 'center',
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
    marginBottom:58,
    marginTop:4

  },
  textinput:{
    width: 291,
    height: 44,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dfdfdf',
    marginVertical:2,
    marginLeft:37,
  paddingLeft:15
  },
  textarea:{
    width: 291,
  height: 90,
  marginLeft:37,
  borderRadius: 2,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#dfdfdf",
  paddingLeft:15,
  paddingBottom:50,
  paddingTop:5
  }
})

