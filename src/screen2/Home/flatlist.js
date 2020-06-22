import React, { Component } from 'react';
import { View, Text,StyleSheet,Modal,Image,FlatList,Alert,TouchableOpacity,TextInput} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
//import { FlatList } from 'react-native-gesture-handler';
import Date from '../Next/date'
const myIcon = <Icon name="close" size={30} color="#900" />;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show:false,
        selected:'',
        selCard:'',
      cropsIntial : [{ id:1,name : "oninon", selected :false ,time:'',batch:[batch1,batch2,batch3]},
      { id:2,name : "potato", selected : false,time:'',batch:[batch1,batch2,batch3]},
      {id:3,name : "tomatoq", selected : false,time:'',batch:[batch1,batch2,batch3]}
    ] ,
        crop:[],
        count:0,
        backgroundColor1:'white',
        backgroundColor2:'white',
        backgroundColor3:'white',
    };
  
  }
  // onPickChange=(value)=>{
  //   console.log(value)
  //   this.setState({

  //     selCard:value
  //   })
  // }
  onValueChange(value,string) {//value,index
    //console.warn(value,string)
    this.setState(prevState => ({
      cropsIntial : prevState.cropsIntial.filter(ele => {
        if(ele.crop == value){
           ele.selected = true
           return ele
        }else {
          return ele
        }
      }),
      crop : prevState.crop.concat(value),
      count : prevState.count + 1
    }))

    // this.setState({
    //   selected: value,
    // crop:this.state.crop.concat(value),
    // count:this.state.count+1

    //crop:[...crop,selected]
  //  })
  }
  deleteCrop=(item)=>{
    this.setState((prevState)=>{
      return{
        count:prevState.count-1,
crop:prevState.crop.filter((user)=>user!==item)
      }
    })
  }
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
    const cropArray=this.state.crop
    console.warn(cropArray)
    //console.warn(item,index)
    return(
      <View style={{width: 360,
        height: 260,
        marginBottom:5,
        borderRadius: 5,
        backgroundColor: "white"}}>
  
  
          <View style={{flexDirection:'row'}}>
        <Text style={{  width:77,
    height: 14,
    fontFamily: "Lato",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop:20,
    marginLeft:20,
    color: "#333333"}}>{item} {index}</Text>
 
     <TouchableOpacity style={styles.butty}
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
               selectedValue={this.state.selCard}
               onValueChange={(value,index)=>{//item is key--1,2,3,4 of label
                 console.log(value,'hiii')
                 console.log(item,'bye')
                 console.warn(cropArray) 
                 this.setState({selCard:item})}} 
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
                    <View>
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
    </View>
    <View>
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
    </View>
    <View>
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
      </View>
      
    )
         }
   
  
  render() {
    return (
      <>
      <View style={styles.container}>
 {this.state.count==0?
 <View style={{marginTop:292}}>
   <Text style={styles.add}>Add your crops to schedule the pickup</Text>
        <Text style={styles.loren}>Lorem ipsum dolor sit amet, consectetur adipisci</Text>
 <Text style={styles.elit} >ng elit, sed do eiusmod tempor.</Text>
   </View>
 :<View></View>
 }
        <ScrollView style={{marginTop:10}}>
        
          <View>
        <FlatList 
        data={this.state.crop}
        renderItem={this._renderItem}
//extraData={this.state}
keyExtractor={(item,index) => index.toString()}
        />
        </View>
        </ScrollView>
      
  

  <View style={{marginLeft:20 ,width: 320,
  height: 55,
  borderRadius: 2,
  backgroundColor: "#b88630"}}>
<TouchableOpacity 
  onPress={()=>{this.setState({show:true})}}
  >
    <Text style={styles.addButton}> ADD YOUR CROP</Text>
</TouchableOpacity>
</View>

<Modal transparent={true} visible={this.state.show}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex:1,
              justifyContent:'center',
              alignItems: 'center',
              
            }}>
            <View
              style={{
                width: 322,
                height: 320,
                borderRadius:4,
                backgroundColor: "#ffffff"
                
              }}>
          <View>
              <TouchableOpacity style={styles.but}
           onPress={()=>{this.setState({show:false}) }}>
            
              <Image source={require('../../imagess/close.png')} style={{width:10,height: 10}}/>
              </TouchableOpacity>

              </View>

              <Text style={styles.please}>
              Please select your crop!
              </Text>
            
            
              <View style={{ width: 280,
  height: 42,
  borderRadius: 2,
  borderWidth:1,
  marginLeft:20,
  marginTop:35
  }}>
  <Picker
              mode="dropdown"
              style={{width:280,color:"#7a7a7a",marginLeft:2,position:'absolute',height:40,fontSize:12}}
              placeholder="Country"
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}
            >
  
              <Picker.Item label="Please select crop" value="" />
              {/* <Picker.Item label="cucumber" value="cucumber" />
              <Picker.Item label="Sugar Cane" value="Sugar Cane" />
              <Picker.Item label="Mango" value="Mango" />
              <Picker.Item label="Wheat" value="Wheat" /> */}
              {
                this.state.cropsIntial.map(crop => {
                  // console.log(crop)
                return (
                  
                 <Picker.Item label = {crop.name} value = {crop.name}>{crop.name}</Picker.Item>
                 
                )
                })
              }
            </Picker>
              </View>
             
            </View>
         
          </View>
        </Modal>
      </View>
      </>
    );
  }
}

export default Home;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f9f9f9",
        
       
    },
    add:{
        //alignItems:'center',
       // width: 232,
        //height: 15,
        fontFamily: "Lato",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 15,
        textAlign: "center",
        color: "#464545",
        //marginTop:227,
        marginLeft:20
        // alignItems:'center',
        // justifyContent:'center'
        
    },
    loren:{
        width: 290,
  height: 18,
  fontFamily: "Lato",
  fontSize: 13,
  fontWeight: "300",
  fontStyle: "normal",
  lineHeight: 15,
  letterSpacing: 0,
  textAlign: "center",
  color: "#696969",
  marginTop:10,
  marginLeft:38,

  
    },
    elit:{
        
        fontFamily: "Lato",
        fontSize: 13,
        fontWeight: "300",
        fontStyle: "normal",
        marginLeft:80,
        color:"#696969"
    },
    addButton:{
        width: 130,
  height:16,
  fontFamily: "Saira",
  fontSize: 16,
  fontWeight: "600",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  color: "#ffffff",
  marginLeft:85,
  marginTop:16,
  padding:2
    },
    please:{
        marginLeft:50,
        marginTop:40,
        width: 190,
        height: 15,
        fontFamily: "Lato",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "center",
        color:"#464545"
        
    },
    but:{
        width:15,height:15,marginLeft:290,marginTop:15
    },
    butty:{
      
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