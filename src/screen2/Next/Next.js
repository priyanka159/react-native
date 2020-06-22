import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Image,TouchableOpacity,ScrollView} from 'react-native';
import {Picker} from 'native-base'
import { TextInput } from 'react-native-gesture-handler';
//import { ScrollView } from 'react-native-gesture-handler';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { FlatList } from 'react-native-gesture-handler';
import Date from './date'
class Next extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:'',
      crop:[],
      backgroundColor1:'white',
      backgroundColor2:'white',
      backgroundColor3:'white',
      count:0
    };
  }

handlePress=()=>{
  const number=Math.round(Math.random()*100)

   this.setState({
     number:number,
     crop:this.state.crop.concat(number),
     count:this.state.count+1
    })
  }
    onValueChange=(value)=>{

    }
    deleteCrop=(item)=>{
      console.warn(item)
      this.setState((prevState)=>{
        return{
          count:prevState.count-1,
crop:prevState.crop.filter((user)=>user!==item)
        }
      })
    }
  //     this.setState(prevState=>({
  //           crop:prevState.crop.concat(number)
  //       })))
  //  this.setState({number},
    
  //       this.setState(prevState=>({
  //           crop:prevState.crop.concat(number)
  //       })))
 
  handleAfter=()=>{
     let backgroundColor1='white'
    let backgroundColor2="#208acf"
    let backgroundColor3="white"
    this.setState({backgroundColor1,backgroundColor2,backgroundColor3})
  }

  handleEven=()=>{
    let backgroundColor1='white'
    let backgroundColor2="white"
    let backgroundColor3="#208acf"
    this.setState({backgroundColor1,backgroundColor2,backgroundColor3})
  }
_renderItem=({item,index})=>{
  console.warn(item,index)
  return(
    <View style={{width: 360,
      height: 260,
      borderRadius: 5,
      backgroundColor: "#ffffff"}}>


        <View style={{flexDirection:'row'}}>
      <Text style={{  width: 64,
  height: 14,
  fontFamily: "Lato",
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  marginTop:20,
  marginLeft:20,
  color: "#333333"}}>{item}</Text>

   <TouchableOpacity style={styles.but}
           onPress={()=>this.deleteCrop(item)}>
            
              <Image source={require('../../imagess/close.png')} style={{width:10,height: 10}}/>
              </TouchableOpacity>
              </View>
              <View style={{width: 320,
  height: 34,
  borderRadius: 2,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 0.1,
  borderColor: "rgba(160, 155, 155, 0.83)",
  marginLeft:20,
  marginTop:20
  }}>
  <Picker
              mode="dropdown"
              style={{width:315,color:"#7a7a7a",marginLeft:2,position:'absolute',height:40,fontSize:12,color:'#939393'}}
              placeholder="Country"
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}
            >
  
              <Picker.Item label="Please select crop batch" value="" />
              <Picker.Item label="cucumber" value="cucumber" />
              <Picker.Item label="Sugar Cane" value="Sugar Cane" />
              <Picker.Item label="Mango" value="Mango" />
              <Picker.Item label="Wheat" value="Wheat" />
            </Picker>
              </View>
            
            <View style={{flexDirection:'row'}}>    
                <TextInput placeholder="Enter pickup Kg" style={styles.textinput} />
                <Date/>
                </View>
                <Text style={styles.pickText}>Please select time of pickup</Text>

                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{ width: 96,marginLeft:20,marginTop:3,
                  backgroundColor:this.state.backgroundColor1,
  height: 66,
  borderStyle: "solid",
  borderWidth: 0.21,
  borderColor: "rgba(160, 155, 155, 0.83)"
  }} 
  onPress={()=>{
    let backgroundColor1='#208acf'
    let backgroundColor2="white"
    let backgroundColor3="white"
    this.setState({backgroundColor1,backgroundColor2,backgroundColor3})
  }}
  
  >
    <Image source={require('../../imagess/noun_morning_956383.png')} style={{ width: 26,
  height: 20,marginLeft:35,marginTop:10}}/>
  <Text style={styles.morn}>Morning</Text>
  </TouchableOpacity>
               <TouchableOpacity style={{ width: 96,marginLeft:16,marginTop:3,
  height: 66,
  backgroundColor:this.state.backgroundColor2,
  borderStyle: "solid",
  borderWidth: 0.21,
  borderColor: "rgba(160, 155, 155, 0.83)"
  }} 
  onPress={this.handleAfter}
  >
       <Image source={require('../../imagess/noun_sun_1039077.png')} style={{ width: 20,
  height: 20,marginLeft:35,marginTop:10}}/>
  <Text style={styles.morn}>Afternoon</Text>
  </TouchableOpacity>
             <TouchableOpacity style={{ width: 96,marginLeft:16,marginTop:3,
  height: 66,
  backgroundColor:this.state.backgroundColor3,
  borderStyle: "solid",
  borderWidth: 0.21,
  borderColor: "rgba(160, 155, 155, 0.83)"
  }}
  onPress={this.handleEven}
  >
       <Image source={require('../../imagess/night.png')} style={{ width: 18,
  height: 20,marginLeft:35,marginTop:10}}/>
  <Text style={styles.morn}>Evening</Text>
  </TouchableOpacity>
                </View>
    </View>
    
  )
}
  render() {
  
   
    return (
      <> 
     
      <View style={{flex:1,}}>
      <ScrollView style={{marginBottom:6}}>
<View>
{this.state.count==0?<View><Text>Add your crops to schedule the pickup</Text></View>:<View></View>}
        {/* <Text style={{margin:10}}> Add your crops to schedule the pickup </Text> */}
    {/* <Text>{this.state.crop.length}</Text> */}
    {/* <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.photo_feed}
          keyExtractor={(item, index) => "" + index}
          style={styles.flatlist}
          renderItem={this._renderItem} */}
          
        <FlatList 
data={this.state.crop}
renderItem={this._renderItem}
extraData={this.state}
keyExtractor={(item,index) => index.toString()}

        />

        </View>
        </ScrollView>

        <View>
        <TouchableOpacity  style={{width:150,height:50,marginLeft:50,borderRadius:5,backgroundColor: "#ffffff"}}onPress={this.handlePress}>
          <Text>Add</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    
      </>
    );
  }
}

export default Next;
const styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
    but:{
      width:12,height:12,marginTop:20,marginLeft:247
    },
    textinput:{
      padding:2,
      width: 153,
  height: 34,
  borderRadius: 2,
  marginLeft:20,
  marginTop:26,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 0.1,
  borderColor: "rgba(160, 155, 155, 0.83)"
    },
    pickText:{
      width: 180,
      padding:1,
      height: 14,
      fontFamily: "Lato",
      fontSize: 13,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 12,
      letterSpacing: 0,
      color: "#808181",
      marginTop:15,
      marginLeft:20
    },
    morn:{
      width: 56,
      height: 12,
      fontFamily: "Lato",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 12,
      letterSpacing: 0,
      color: "#939393",
      marginLeft:25,
      marginTop:15
    }
})
