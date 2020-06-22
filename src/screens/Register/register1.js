import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,TouchableHighlight} from 'react-native';
import logo from '../../imagess/a.png'
import Swiper from 'react-native-swiper'
import {Picker,Form} from 'native-base'
import Register2 from './register2'
import { TouchableOpacity } from 'react-native-gesture-handler';
class Register1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"Alex Kurtzman",
      businessName:" ",
      email:'',
      phone:'',
      country:'',
      selected:''
    };
  }
  onValueChange(value,string) {//value,index
  console.warn(value)
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Swiper loop={false}
      dot={<View style={styles.dott}/>}
          activeDot={<View style={styles.active}
          />}
      >
      <View style={styles.container}>
         <Image source={logo} style={styles.logo} />
        <Text style={styles.registrationWith}>Registration with Us</Text>
        <Text style={styles.lorenText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Text>
        <TextInput placeholder="name" value={this.state.name} style={styles.textinput} />
        <TextInput placeholder="Business Name" style={styles.textinput} />
        <TextInput placeholder="Email" style={styles.textinput} />
        <TextInput placeholder="Phone" style={styles.textinput} />
        <View style={styles.textinput}
        >
              <Picker
              mode="dropdown"
              style={{width:280,color:"#7a7a7a",marginLeft:2,position:'absolute',height:36}}
              placeholder="Country"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
  
              <Picker.Item label="Country"  fontSize="5" value="" />
              <Picker.Item label="India" value="key1" />
              <Picker.Item label="Australia" value="key2" />
              <Picker.Item label="America" value="key3" />
              <Picker.Item label="Japan" value="key4" />
            </Picker>
        </View>
        
    
 
         <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Offer')}}
          style={{
            width: 288,
            height: 49,
            marginTop:71,
            borderRadius: 3,
            backgroundColor: '#fb345c',
            marginLeft:37
          }}>
          <Text style={styles.textButton}>ONE LAST STEP</Text>
        </TouchableOpacity>
      </View>

      <Register2/>

      </Swiper>
    );
  }
}
export default Register1;

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
  textButton:{
    alignItems: 'center',
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
    marginTop:4
  },
  dott:{
  backgroundColor:'white', width: 10.5,
      height: 10.3,
      borderStyle: "solid",
      borderWidth: 1.2,
      borderColor: "#0a0a0a",borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom:100,
  },
  active:{
    backgroundColor: 'red', width: 10.5,
          height: 10.3,
          borderStyle: "solid",
          borderWidth: 1.2,
          borderColor: "#0a0a0a" ,borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom:100
  }

})

