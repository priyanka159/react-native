import React, { Component } from 'react';
import {ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {TextInput} from 'react-native-gesture-handler'
import {loginAction, startGetUsers} from '../../actions/user'
import axios from 'axios'
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailId:'',
        password:'',
        isFocused:false,
        isFoc:false
    };
  }
  handleFocus = () => {
   // console.warn(this.props.navigation)
      this.setState({isFocused: true})
    }
  handleBlur = () => {

      this.setState({isFocused:false})
    //   if(isFocused){
    //       return(

    //       )
    //   }
    }
  handleFoc=() => this.setState({isFoc:true})
  handleBlu = () => this.setState({isFoc: false})
handleChangeEmail=(e)=>{
    //console.warn(e)
    this.setState({emailId:e})
}
handleChangePassword=(e)=>{
    this.setState({password:e})
}
handlePress=()=>{
    console.warn(this.props.navigation)
    let formData={
        emailId:this.state.emailId,
        password:this.state.password
    }
    console.warn(formData)
// this.props.dispatch(startGetUsers())
// this.props.navigation.navigate('Work')
  //  async handlePress=()=>{
    //   try{
    // // let url="https://timely-api.codewave.com/v1/mobilelogin"
    // let response=await fetch(url,{
    // //     method:'POST',
    //     body:JSON.stringify(formData),
    //     headers:{
    //         'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTg3ZTE2Mzc3MjUzMDM3NThlM2FlMDYiLCJpYXQiOjE1ODU5NjY2OTF9.DQn8J6_ZJjgtUTko-WUpCdC5hs2pqV65eJYA9BT4d20"

    //     }
    // })
    // .then((result)=>{
    //     result.json()
    // })
    // .then((resp)=>{
    //     console.log(resp)
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
    // let req = BASE_URL + `/farmer-purchase-order-history`;
    // let reqBody = JSON.stringify({
    //   farmerId: this.state.farmerId,
    //   token: this.state.uniqueToken,
    //   userType: "farmer"
    //   // taskId: this.state.taskId //"5d42d23423090e4c5ef9e5fa"
    // });
    // // console.log(reqBody);
    // // console.log(req);

    // try {
    //   const response = await fetch(req, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: reqBody
    //   });
    //   const resData = await response.json();
    //   // console.log(resData);
    //   if (resData.status_code == 200 && resData.status == "success") {
    //     this.setState({
    //       FlatListItems: resData.data,
    //       loading: false,
    //       total_income: resData.totalAmt
    //     });
    //   } else {
    //     this.setState({ loading: false }, () => {
    //       Alert.alert("", "Something Went Wrong");
    //     });
    //   }

    // } catch (error) {
    //   Alert.alert("", "Something Went Wrong");
    //   console.log(error);
    //   this.setState({ loading: false });
    // }
//try{
    axios.post('https://timely-api.codewave.com/v1/mobilelogin',formData,
      {  headers:{
            'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTg3ZTE2Mzc3MjUzMDM3NThlM2FlMDYiLCJpYXQiOjE1ODU5NjY2OTF9.DQn8J6_ZJjgtUTko-WUpCdC5hs2pqV65eJYA9BT4d20"
        }}
    )
    .then(response=>{
        console.warn(response.data)
        const token=response.data.token
        const user=response.data.user
        const company=response.data.company
        //const emailId=response.data.emailId
        const username=response.data.username
        console.warn(token,'hii',this.props)
        //const redirect = () => this.props.navigation.navigate('Work')
        if(token){
            //resp.username, data.emailId, resp.user, resp.company
            this.props.dispatch(loginAction(username,user,company))
       this.props.navigation.navigate('Work')
        }
        else{
            alert('email or password is incorrect')
        }
    })

    .catch(err=>{
        console.warn(err)
    })
//}
// catch(err){
//     console.log(err)
// }
}
  render() {
  //console.log(this.props,'login')
    return (
      <View style={styles.container}>

         <ImageBackground  source={require('../../imagess/Timely/bg.png')} style={{flex:1,width:360,
            height:650,alignItems:'center',backgroundColor: "rgba(11, 12, 31, 0.87)"}}>
            
      


          <Image source={require('../../imagess/Timely/group_9.png')} style={styles.image}/>
      
        <Text style={styles.text}> PLEASE LOGIN TO YOUR ACCOUNT </Text>
       
        <View style={{...styles.textinput,marginTop:32,flexDirection:'row',borderColor: this.state.isFocused?'#f9ca24':'#0f121d'}}> 
        <Image source={require('../../imagess/Timely/user.png')} style={{marginLeft:18,marginRight:18,
        // if(tintColor==this.state.isFocused){
        //     return  tintColor='#f9ca24'
        // }
        // else if(tintColor==this.state.isFoc){
        //     return tintColor="#f9ca24"
        // }
        // else{
        //     tintColor="#707781"
        // }
  tintColor:this.state.isFocused?'#f9ca24':this.state.emailId?'#f9ca24':'#707781',//nested ternary operator
    marginTop:10, width: 12,height: 15}}/>
        <TextInput
           onFocus={this.handleFocus}
           onBlur={this.handleBlur}
        value={this.state.emailId}
        placeholder="Enter Employee ID"
        placeholderTextColor="#707781" 
        style={{color:'#f9ca24',width:270}}
     
        onChangeText={this.handleChangeEmail}
        />
 
          
        </View>
        <View   style={{...styles.textinput,marginTop:16,flexDirection:'row',borderColor: this.state.isFoc?'#f9ca24':'#0f121d'}}>
        <Image source={require('../../imagess/Timely/lock.png')} style={{marginLeft:18,marginTop:10,marginRight:18, 
         tintColor:this.state.isFoc?'#f9ca24':'#707781',
            width: 12,height: 15}}/>
        <TextInput
        onFocus={this.handleFoc}
        onBlur={this.handleBlu}
         value={this.state.password}
        placeholder="Enter Password"
        placeholderTextColor="#707781" 
        onChangeText={this.handleChangePassword}
        secureTextEntry={true}
        style={{color:'#f9ca24',borderColor: this.state.isFoc ?'#f9ca24':'grey'}}
        
        
      
        />

</View>

{/* {
    this.state.emailId &&(
        
    )
} */}
{
    this.state.isFocused &&(
        <View style={{ width: 360,alignItems:'center',marginTop:196,
            height: 48,borderRadius:2,backgroundColor:'#989bb3'}}>
    <TouchableOpacity 
    
    >
        <Text style={{textAlign:'center',marginTop:10,fontFamily: "AvenirNext",fontSize: 18,fontWeight: "600",fontStyle: "normal",
  letterSpacing: 1,color:'#393e46'}}>LOGIN</Text>
    </TouchableOpacity>
    </View>
    )
}
{
    this.state.isFoc &&(
        <View style={{ width: 360,alignItems:'center',marginTop:196,
        height: 52,borderRadius:2,backgroundColor:'#f9ca24'}}>
<TouchableOpacity 
onPress={this.handlePress}
>
    <Text style={{textAlign:'center',marginTop:10, fontFamily: "AvenirNext",fontSize: 18,fontWeight: "600",fontStyle: "normal",
letterSpacing: 1,color:'#393e46'}}>LOGIN</Text>
</TouchableOpacity>
</View>
    )
}
</ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'#0b0c1f',
       // alignItems:'center'
    },
    // imgBackground:{
    //     flex:1,

    // },

    image:{
        marginTop:102,
        width: 115,
        height: 117,

    },
placeholder:{
    width: 120,
  height: 19,
  fontFamily: "AvenirNext",
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "green",
  marginLeft:50
}
,
    text:{
        width: 273,
        height: 22,
        fontFamily: "AvenirNext",
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff",
        marginTop:35,
        marginLeft:20
    },
    textinput:{
        width: 328,
        height: 40,
        borderRadius: 5,
        backgroundColor: "#0f121d",//"#0f121d",
        
       // borderColor:'red',
        borderWidth:2
        
    },
    
})
export default connect()(Time);
