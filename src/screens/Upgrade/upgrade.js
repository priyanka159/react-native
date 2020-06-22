import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,Button,TouchableOpacity,Modal} from 'react-native';
import styles from './styles'
import Card from './card'
//import Popup from './modal'

class Upgrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input:'',
        amount:0,
        show:false,
        change:'',
        shouldShow:false
    };
    this.onPress=this.onPress.bind(this)
    //this.handlePress=this.handlePress.bind(this)
  }
 handleChangeText=(input)=>{//e
     console.log(input)
     const amount=input*10
     this.setState({input,amount})
 }

// handlePress=()=>{
// this.setState((prevState)=>{
//     return{
//         amount:prevState.input*50
//     }
// })
// }
onPress=(e)=>{
  //console.warn(e)

  const input=e.toString()
  
  const amount=e*10
   this.setState({input,amount})
    }
    // onFifPress=()=>{
    //     this.setState((prevState)=>{
    //         return{
    //             amount:prevState.input*500
    //         }
    //     })
    //     }
    handlePress=(e)=>{
      const input=e.toString()
      const amount=e*10
      this.setState({input,amount})
    }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have <Text style={{color:"red"}}>8</Text> more offers left</Text>
        <Text style={styles.enter}>Enter offers you want</Text>
        <TextInput placeholder="Enter the number of offer you want" 
         value={this.state.input}
         style={styles.textInput}   
         onChangeText={this.handleChangeText} />
    <View style={{flex:1,flexDirection:'row'}}>
    <TouchableOpacity
        style={styles.button1}
        onPress={()=>this.onPress(50)} >

        <Text style={{textAlign:"center",marginTop:5}}>50</Text>
      </TouchableOpacity>
{/* <TouchableOpacity
 onPress={()=>{ this.setState({ shouldShow: !this.state.shouldShow })}}
><Text>Edit</Text></TouchableOpacity>
{this.state.shouldShow ?
 <TextInput
            onChangeText={(text) => this.setState({textinput: text})}
            value={this.state.textinput}
          /> : null} */}
      <TouchableOpacity
        style={styles.button}
        onPress={()=>this.onPress(100)} >
        <Text style={{textAlign:"center",marginTop:5}}>100</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>this.onPress(500)}  >
        <Text style={{textAlign:"center",marginTop:5}}>500</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>this.onPress(1000)}  >
        <Text style={{textAlign:"center",marginTop:5}}>1000</Text>
      </TouchableOpacity>

     </View>
   <Text style={{ height:20,width: 304,marginLeft:10,marginBottom:15,
  fontFamily: "Lato",
  fontSize: 16,
  fontWeight: "normal"}}> Select the offer pack you want</Text> 
<Card handlePress={this.handlePress}/>

     <View style={styles.rect}>
         <View>
         <Text style={{marginTop:10,marginLeft:16,fontFamily: "OpenSans", fontSize: 12,
 }}>Amount Payable</Text>
       <Text style={styles.youAre}>you are select {this.state.input} offer pack</Text>  
       </View>
         <Text style={{marginLeft:130,marginTop:10,color:"red",fontSize:25}}><Text style={{fontSize:15}}>₹</Text>{this.state.amount}</Text>
     </View>
     <TouchableOpacity
        style={styles.submit}
         onPress={()=>{this.setState({show:true})}}//showing modal here--black-#000000aa
         >
        <Text style={styles.proceed}>PROCEED TO PAY</Text>
      </TouchableOpacity>

     {/* <Popup show={this.state.show}/> */}
     <Modal transparent={true} visible={this.state.show}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
            <View
              style={{
                width: 320,
                height: 104,
                borderRadius: 3,
                backgroundColor: '#fae055',
                marginTop:100
              }}>
              <Text style={styles.great}>
                Great! {'\n'} You have saved 20 INR
              </Text>
            </View>
            <View style={{width: 320, height: 130, backgroundColor: 'white'}}>
              <Text style={styles.thank}>
                Thank you for visiting our store.{'\n'}
                Hope to see you again.
              </Text>
              <TouchableOpacity
                style={styles.back}
                onPress={() => {
                  this.setState({show:false});
                }}>
                <Text style={styles.back}>BACK TO HOME</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>

    );
  }
}

export default Upgrade;
