import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableHighlight,TouchableOpacity,Image,ImageBackground,Switch} from 'react-native';
import {Picker,Icon} from 'native-base'
import ImagePicker from 'react-native-image-picker'
import styles from './styles'
import UpDate from './date'
import DownDate from './date1'
//popup--take image from gallery..
const options={
  title:"my pic app",
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
    
  }
  // takePhotoButtonTitle:"Take photo with your camera",
  // chooseFromLibraryButtonTitle:'choose Photo from library'
}
class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:'',
        avatarSource:null,
        isStudent:false,
        isFamily:false,
        isTourist:false,
        isRegular:false,
        isNew:false
      }
    };
  
  onValueChange(value,string) {//value,index
    
    this.setState({
      selected: value
    });
  }
  myFun=()=>{
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);

      } else {
        const source = { uri: response.uri };
     
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
     
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  onStudentChange=(e)=>{
this.setState((prevState)=>{
  return{
isStudent:!prevState.isStudent
  }
})
  }
onFamilyChange=(e)=>{
this.setState((prevState)=>{
return{
isFamily:!prevState.isFamily
}
})

  }
  onTouristChange=()=>{
    this.setState((prevState)=>{
      return{
        isTourist:!prevState.isTourist
      }
    })
  }
  onRegular=()=>{
    this.setState((prevState)=>{
      return{
        isRegular:!prevState.isRegular
      }
    })
  }
  onNew=()=>{
    this.setState((prevState)=>{
      return{
        isNew:!prevState.isNew
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nokia}> Nokia 1100</Text>
        <TextInput placeholder="Enter the offer (eg: 20% or Buy 1 Get 1)" style={styles.textinput} />
        <TextInput placeholder="Offer Description" style={styles.textinput} />
        <View style={{flexDirection:'row'}}>
          <View style={styles.box1}>
          <Picker
              mode="dropdown"
              style={{width:170,color:'#7a7a7a'}}
              //iosIcon={<Icon name="arrow-down" />}
              placeholder="Country"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Offer Category" value="" />
              <Picker.Item label="offerss" value="offers" />
              <Picker.Item label="Hello" value="Hello" />
            </Picker>
 </View>
          <View style={styles.box2}>
          <Picker
              mode="dropdown"
              style={{width:170,color:'#7a7a7a'}}
              placeholder="Country"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
  
              <Picker.Item label="offer subcategory" value="" />
              <Picker.Item label="sub cat" value="sub cat" />
              <Picker.Item label="byebye" value="byebye" />
            </Picker>
          </View>

        </View>
        <View style={styles.textinput}>
        <Picker
              mode="dropdown"
              style={{width:327,color:"#7a7a7a",marginLeft:2,fontStyle:'OpenSans',position:'absolute',height:40,fontSize:12}}
             // style={{width:310}}
              placeholder="Country"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
  
              <Picker.Item label="Offer eligible after (eg: after 5 purchases)" value="" />
              <Picker.Item label="one" value="one" />
              <Picker.Item label="two" value="two" />
              <Picker.Item label="three" value="three" />
   
            </Picker>
            
        </View>
        <View style={{flexDirection:'row'}}>
      
        <TouchableOpacity style={styles.touch} onPress={this.myFun} >
        <Image source={require('../../imagess/upload_to_cloud.png')} style={{  marginLeft:65,marginTop:12,width: 28.4,height: 21.9}}/>
<Text style={styles.Tap}>Tap here to upload offer image</Text>

<Image source={this.state.avatarSource} style={{width:153,height:90,position:'absolute'}}/>
        </TouchableOpacity>
      
      <View style={{flexDirection:'column'}}>
     <UpDate/>
     <DownDate/>
      {/* <View style={styles.from}>
        <View style={{flexDirection:'row'}}>
        
<Text style={styles.cal}>From</Text>
<Image source={require('../../imagess/calendar.png')} style={{ width: 22, height: 21,marginLeft:80,marginTop:10}}/>
</View>
      </View> */}
      {/* <View style={styles.to}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cal}>To</Text>
        <Image source={require('../../imagess/calendar.png')} style={{ width: 22, height: 21,marginLeft:80,marginTop:10}}/>
      </View>
      </View> */}
      </View> 
      </View>
      <Text style={styles.select}>Select Target Audience</Text>
      <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{marginLeft:20, fontFamily: "Lato",fontSize: 12,  width: 49, height: 14,}}>Students</Text>
        <Switch 
        style={{marginLeft:49}}
        value={this.state.isStudent}
        onValueChange={this.onStudentChange}
        trackColor={{ true: '#ff9ea7' }}
        thumbColor={this.state.isStudent? "red" : "#f4f3f4"}
        
        //thumbColor={[Platform.OS=='ios'?'#FFFFFF':(item.status ?'#7ab8e1':'#ffffff')]}
        />
        <Text style={{marginLeft:10,fontFamily: "Lato",fontSize: 12,  width: 49, height: 14, fontWeight: "normal",
  fontStyle: "normal"}}>Families</Text>
        <Switch 
        style={{marginLeft:60}}
        value={this.state.isFamily}
        onValueChange={this.onFamilyChange}
        trackColor={{ true: '#ff9ea7' }}
        thumbColor={this.state.isFamily? "red" : "#f4f3f4"}
        />
        </View>
<View style={{flexDirection:'row'}}>
        <Text style={{marginLeft:20, fontFamily: "Lato",fontSize: 12,  width: 49, height: 14, fontWeight: "normal",
  fontStyle: "normal"}}>Tourists</Text>
        <Switch 
         style={{marginLeft:49}}
        value={this.state.isTourist}
        onValueChange={this.onTouristChange}
        trackColor={{ true: '#ff9ea7' }}
        thumbColor={this.state.isTourist? "red" : "#f4f3f4"}
        />
        <Text style={{marginLeft:10, width: 108,
  height: 16,
  fontFamily: "Lato",
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal"}}>Regular customers</Text> 
        <Switch 
        value={this.state.isRegular}
        onValueChange={this.onRegular}
        trackColor={{ true: '#ff9ea7' }}
        thumbColor={this.state.isRegular? "red" : "#f4f3f4"}
        />
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={{marginLeft:20,
  fontFamily: "Lato",
  fontSize: 12,}}>New{'\n'} Customers</Text>
      <Switch 
        value={this.state.isNew}
        style={{marginLeft:38}}
        onValueChange={this.onNew}
        trackColor={{ true: '#ff9ea7' }}//back side
        thumbColor={this.state.isNew? "red" : "#f4f3f4"}//front cirlce of switch
        
        />
        </View>
      <ImageBackground style={{width: 321,marginLeft:20,marginTop:12,marginBottom:8,
  height: 65,
  borderRadius: 3,
  backgroundColor: "#fffdde"}}
      >
        <Text style={styles.offer}>Offer split up: For every offer that discounts 10%,
           7% would be the discount value, 2% goes to Savoll
            platform & 1% goes to creation of freebies.</Text>
        </ImageBackground>
      <TouchableHighlight
          style={{
            width: 319,
            height: 49,
            borderRadius: 3,
            backgroundColor: "#fb345c",
            marginLeft:20,
            marginTop:5
          }}>
          <Text style={styles.textButton}>SUBMIT THE OFFER</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Offer;
