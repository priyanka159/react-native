import React, { Component } from 'react';
import { View,ScrollView, Text,StyleSheet,Modal,Image,FlatList,Alert,TouchableOpacity,TextInput,TouchableWithoutFeedback} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Picker} from 'native-base'
import axios from 'axios'
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { ScrollView } from 'react-native-gesture-handler';
import Date from '../Next/date'
//const myIcon = <Icon name="close" size={30} color="#900" />;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show:false,
        selected:'',
     
        selCard:'',
        crop:[],
        kg:'',
        date:""
      
    };
  
  }
 
  handlePik=(e,index,value)=>{
    console.warn(e,index,value)
    // for(let i=0;i<this.state.crop.length;i++){
    //   console.warn('hello')
    //   if (this.state.crop[i].name ==e) {
    //     this.state.crop[i].batch = e;
    //     break;
    // }
  //}
  console.warn(this.state.crop[0].name)
}
  //   this.setState({

  //     selCard:value
  //   })
  // }
  onList=(e,index)=>{ 
//     const obj={}
//     const temp=[]
//     obj['id']=''
//     obj['name']=''
//     obj['date']=''
//     obj['kg']=''
//     obj['pickerTime']=''
// let a=temp.push(obj)
//   let b=[...this.state.crop,a]
let b=[...this.state.crop,{id:'',name:e,date:'',isSel:'',
isActive:true,Activebatch:['batch 1','batch 2','batch 3'],
batch:'',kg:'',pickerTime:'Morning'}]

console.warn(this.state.selCard,'seee')
//console.warn(b)
 this.setState({
  selected:e,
crop:b,
 },
 ()=>this.setState({
   selected:'',
  
 }))
 
 
//console.warn(this.state.selected,this.state.crop,'hiii')
   }

  deleteCrop=(item,index)=>{
    console.warn(item,index)
    this.setState((prevState)=>{
      return{
        count:prevState.count-1,
crop:prevState.crop.filter((user)=>user.id!==index)//id**index is array index
      }
    })
  }
  shiftChange(time,index,id){
    this.setState(prevState => ({
      crop: prevState.crop.map(
      obj => (obj.id ===id? Object.assign(obj, { pickerTime:time }) : obj)
    )
  },()=>console.log(this.state.crop)));
  }
addDate(date,index){
 // console.warn(date)
  this.state.crop[index].date=date
 
   console.warn(this.state.date)
}

addCrop(item,index,text){
  this.state.crop[index].kg=text
  console.warn('hii',this.state.crop)
  // console.warn('hello',item,index)
  //  let objIndex=this.state.crop.findIndex(obj=>obj.id==index)
  // console.warn(objIndex,'hii')
  // this.state.crop[objIndex].kg=text
}
addBatch(id,itemValue){
 
  console.warn(itemValue,'bye',id)//index is picker index..
  
  this.setState(prevState => ({
    crop: prevState.crop.map(
    obj => (obj.id ===id? Object.assign(obj, { batch: itemValue }) : obj)
    
  )

}));
  

  console.warn(this.state.crop)
  //    let objIndex=this.state.crop.findIndex(obj=>obj.id)
  // console.warn(objIndex,'hii')
  // this.state.crop[objIndex].batch.concat(itemValue)
  // // this.state.crop[index].batch=itemValue
 
  // console.warn('hii',this.state.crop)

}
selChange(){
  console.warn('priyanka')
  this.setState({selCard:''})
}



// componentDidMount(){
//   axios.get('/customers',{
//       headers:{
//           'x-auth':localStorage.getItem('authToken')
//       }
//   })
//   .then(response=>{
//       const customers=response.data
//       console.log(response.data)
//       this.setState({customers})
     
//   })
// }
  _renderItem=({item,index})=>{  
    //console.warn('hiii',index,item)
      item.id=index
      console.warn(item,this.state.crop)
     
      //St
//     //console.warn(cropArray)
//     //console.warn(item,index)
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
     color: "#333333"}}>{item.name}</Text>
   
 
     <TouchableOpacity style={styles.butty}
             onPress={()=>this.deleteCrop(item,index)}>
              
               <Image source={require('../../imagess/close.png')} style={{width:10,height: 10}}/>
               </TouchableOpacity>
           </View>
    
                
                <View style={{width: 300,
    height: 34,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.1,
    borderColor: "rgba(160, 155, 155, 0.83)",
    marginLeft:20,
    marginTop:20,
    colr:'red'
    }}>
 
    <Picker 
                mode="dropdown"
                style={{width:315,color:"#7a7a7a",marginLeft:2,position:'absolute',height:40,fontSize:12,color:'#939393'}}
                placeholder="Country"
               selectedValue={this.state.selCard}//{item.isSel}
               onValueChange={(itemValue,index) =>{ 
               
                //let item = this.state.crop[itemIndex]
                 console.warn(itemValue,index)
                 console.warn(this.state.selCard)
              //    this.setState(prevState => ({
              //     crop: prevState.crop.map(
              //     obj => (obj.id ===id? Object.assign(obj, { isSel:itemValue}) : obj)
              //   )
              // }
                 this.setState({
                
                selCard: itemValue},
                ()=>
                this.addBatch(item.id,itemValue)
              )
               // selIndex:itemIndex
              // },()=>{ 
              //   this.addBatch(item.id,itemValue)
              // })
           
             // this.state.crop[index].batch =itemValue;
            }
          
          }//item is key--1,2,3,4 of label
               
             
                
              >
                  <Picker.Item label="Please select crop batch" value="" />
                <Picker.Item label="batch 1" value="batch 1" />
                <Picker.Item label="batch 2" value="batch 2" />
                <Picker.Item label="batch 3" value="batch 3" />
    
                {/* <Picker.Item label="Please select crop batch" value="" />
                {console.warn(this.state.crop[index].Activebatch.length)}
               {this.state.crop[index].Activebatch.map((i,index)=>(
 <Picker.Item label={i} value={i} />
               ))}
                
              </Picker> */}
               </Picker> 
               
</View>

    
<View style={{flexDirection:'row'}}>    
                  <TextInput placeholder="Enter pickup Kg" style={styles.textinput} 
                 // value={this.state.kg}
                  onChangeText = {(text)=>{this.setState({kg:text},
                    ()=>{
                      this.addCrop(item,index,text)
                    })}}
                
                  />
                  {/* <Date /> */}
                  <DatePicker
          style={{width:170}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Select date"
          
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require('../../imagess/icon.png')}
          customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 120,
                width: 17,
                height: 18,
                marginTop:25
              },
            dateInput: {
     width: 153,
    height: 34,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.1,
    borderColor:"rgba(160, 155, 155, 0.83)",
    marginTop:28,
    marginBottom:5,
    paddingRight:80,
    marginLeft:15,
    marginTop:50
            }
          }}
          onDateChange={(date) => {
            
            this.setState({date: date},
            ()=>{this.addDate(date,index)})}}
        />
                  </View>
                  <Text style={styles.pickText}>Please select time of pickup</Text>
  
                  <View style={{flexDirection:'row'}}>
                    <View>
                    <TouchableOpacity style={{ width: 96,marginLeft:20,marginTop:3,
                    backgroundColor:item.pickerTime=="Morning"?"#208acf":"#ffffff",
    height: 66,
    borderStyle: "solid",
    borderWidth: 0.21,
    borderColor: "rgba(160, 155, 155, 0.83)"
    }} 
    onPress={()=>{
      this.shiftChange("Morning",index,item.id)
    }}
    
    >
     <Image source={require('../../imagess/noun_morning_956383.png')}  style={{ width: 26,
    height: 20,marginLeft:35,marginTop:10}}
    tintColor={item.pickerTime=="Morning"?"white":"#b88630"}
    />
    <Text style={{width: 56,
      height: 12,
      fontFamily: "Lato",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 12,
      letterSpacing: 0,
      color:item.pickerTime==="Morning"?"white":"#939393",
      marginLeft:25,
      marginTop:15}}>Morning</Text>
    </TouchableOpacity>
    </View>
    <View>
                 <TouchableOpacity style={{ width: 96,marginLeft:16,marginTop:3,
    height: 66,
    backgroundColor:item.pickerTime=="Afternoon"?"#208acf":"#ffffff",
    borderStyle: "solid",
    borderWidth: 0.21,
    borderColor: "rgba(160, 155, 155, 0.83)"
    }} 
    onPress={()=>{
      this.shiftChange("Afternoon",index,item.id)
    }}
    >
       <Image source={require('../../imagess/noun_sun_1039077.png')} style={{ width: 20,
    height: 20,marginLeft:35,marginTop:10}}
    tintColor={item.pickerTime=="Afternoon"?"white":"#b88630"}
    />
    <Text style={{width: 56,
      height: 12,
      fontFamily: "Lato",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 12,
      letterSpacing: 0,
      color:item.pickerTime==="Afternoon"?"white":"#939393",
      marginLeft:25,
      marginTop:15}}>Afternoon</Text>
    </TouchableOpacity>
    </View>
    <View>
               <TouchableOpacity style={{ width: 96,marginLeft:16,marginTop:3,
    height: 66,
    backgroundColor:item.pickerTime=="Evening"?"#208acf":"#ffffff",
    borderStyle: "solid",
    borderWidth: 0.21,
    borderColor: "rgba(160, 155, 155, 0.83)"
    }}
    onPress={()=>{
      this.shiftChange("Evening",index,item.id)
    }}
    >
        <Image source={require('../../imagess/night.png')} style={{ width: 18,
    height: 20,marginLeft:35,marginTop:10}}
    tintColor={item.pickerTime=="Evening"?"white":"#b88630"}
    />
    <Text style={{width: 56,
      height: 12,
      fontFamily: "Lato",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 12,
      letterSpacing: 0,
      color:item.pickerTime==="Evening"?"white":"#939393",
      marginLeft:25,
      marginTop:15}}>Evening</Text>
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
 {
 this.state.crop.length==0 &&(
   <View>
 <View style={{marginTop:292}}>
 
   <Text style={styles.add}>Add your crops to schedule the pickup</Text>
        <Text style={styles.loren}>Lorem ipsum dolor sit amet, consectetur adipisci</Text>
 <Text style={styles.elit} >ng elit, sed do eiusmod tempor.</Text>
 </View>
   <View style={{marginLeft:20 ,width: 320,marginTop:150,
    height: 55,
    borderRadius: 2,
    backgroundColor: "#b88630"}}>
  <TouchableOpacity 
    onPress={()=>{this.setState({show:true})}}
    >
      <Text style={styles.addButton}> ADD YOUR CROP</Text>
  </TouchableOpacity>
  </View>
 
  </View>
 )
   }

 {this.state.crop.length !==0 &&(
  <View style={{flex:1}}>
     
    <Text style={{marginTop:20,marginBottom:20,marginLeft:10,  //width: 232,
  height: 14,
  fontFamily: "Lato",
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  //textAlign: "center",
  color: "#464545"}}>Add your crops to schedule the pickup</Text> 
        <ScrollView>
      
          <View>
         <FlatList 
        data={this.state.crop}
        renderItem={this._renderItem}
extraData={this.state}
keyExtractor={(item,index) => index.toString()}
        /> 
        </View>

        <View style={ {width: 194,marginLeft:83,marginTop:20,
  height: 42,
  borderRadius: 5,
  backgroundColor: "#ffffff"}}>
        <TouchableOpacity  onPress={()=>{this.setState({show:true})}}>< Text style={{ width: 72,marginLeft:61,marginTop:14,
  height: 14,
  fontFamily: "Lato",
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  color: "#b68715"}}>ADD CROP</Text></TouchableOpacity>
        </View>
        </ScrollView>


        <View style={{ width:320, height: 50,marginLeft:20,marginTop:20,marginBottom:30, borderRadius: 2, backgroundColor: "#b88630"}}>
          <TouchableOpacity>
            <Text style={{ width:200, height: 14,padding:1,marginLeft:90,marginTop:20, fontFamily: "Saira",fontSize: 16,fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  color: "#ffffff"}}>SCHEDULE PICKUP</Text></TouchableOpacity>
        </View>

    </View>
 )
  }
  

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
             onValueChange={this.onList.bind(this)}
            >
  
              <Picker.Item label="Please select crop" value="" />
              <Picker.Item label="cucumber" value="cucumber" />
              <Picker.Item label="Sugar Cane" value="Sugar Cane" />
              <Picker.Item label="Mango" value="Mango" />
              <Picker.Item label="Wheat" value="Wheat" />
          
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