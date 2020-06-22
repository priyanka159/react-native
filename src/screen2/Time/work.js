import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import moment from 'moment';
import axios from 'axios'
//import DatePicker from 'react-native-datepicker'
import {View, Text, StyleSheet, Image, ScrollView,Picker} from 'react-native';
import {
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import DateFrom from './datefrom';
import RangeSlider from 'rn-range-slider';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      wfhComment:'',
      leaveComment:'',
      date1:'',
      date2:'',
      isOffice: true,
      isWfh: false,
      isLeave: false,
      isComment:false,//for last button-show
      rangeLow:new Date(),
      rangeHigh:'',
      alternative:'',
      profile:'',
      noOfDays:'',
      backFill:[]
  
    };
  }

componentDidMount(){////ask
  let formData={
    "user":"5ee20b7c6eb9b431a9112e24"
  }
axios.post('https://timely-api.codewave.com/v1/mystatus',formData)
.then(response=>{
  const profile=response.data.userProfilePic
  const data=response.data
  this.setState({
    profile:profile
  
  })
  console.log(data,profile)
})
.catch(err=>{
  console.log(err)
})

axios.post('https://timely-api.codewave.com/v1/mybackfill',formData)
.then(response=>{
  let backFill=response.data.backfillUsers.map(user=>user.name)
  this.setState({
    backFill
  })
 // console.log(backFill)
})



}



handleDateChange=(e)=>{
  console.log('date2..',e)
  this.setState({
    date2:e
  })
  this.onRequest()
}
onRequest=()=>{
  let formData={
    "company":"5e95bd97bc99a0000769274e",
    "fromDate":this.state.date1 ,
    "toDate":this.state.date2
  }
 // console.log(formData,'khj')
axios.post('https://timely-api.codewave.com/v1/getnumberofdays',formData)
.then(response=>{
  this.setState({
    noOfDays:response.data.resData.numberOfDays
  })
  console.log(response.data,formData)
})
.catch(err=>{
  console.log(err)
})
}
  handleOffice = () => {
    this.setState(prevState => {
      return {
        isOffice: true,
        isWfh: false,
        isLeave: false,
        
      };
    });
  };
  handleWFH = () => {
    this.setState({
      isWfh: true,
      isOffice: false,
      isLeave: false,
    });
  };
  handleLeave = () => {
    this.setState({
      isLeave: true,
      isWfh: false,
      isOffice: false,
    });
  };
  drop = e => {
   
    this.setState({comment:e,
      isComment:true
    });
  };
  head = e => {
    let comment = e;
    this.setState({
      comment:comment,
      isComment:true
    });
  };
  leave = e => {
    let comment = e;
    this.setState({
      comment
    });
  };
  like=(e)=>{
    this.setState({
      wfhComment:e
    })
  }
  paper=(e)=>{
    this.setState({
      wfhComment:e
    })
  }
  work=(e)=>{
    this.setState({
      wfhComment:e
    })
  }
  handleChange = e => {
    this.setState({
      comment: e,
      isComment:true
    });
  };
  handleWFHChange=(e)=>{
    this.setState({
      wfhComment:e
    })
  }
  handleLeaveChange=(e)=>{
    this.setState({
      leaveComment:e
    })
  }
  feel=(e)=>{
    this.setState({
      leaveComment:e
    })
  }
  family=(e)=>{
    this.setState({
      leaveComment:e
    })
  }
  native=(e)=>{
    this.setState({
      leaveComment:e
    })
  }
  render() {
    // let d=new Date()
    // let time=d.getTime()
    // let hour=time/36000
    // let min=time/60

    // console.log(hour+":"+min)
    console.log(this.state.backFill)
    console.log(this.state.date1,this.state.date2,'date')
console.log("hii",this.state.profile)
    return (
      <ImageBackground
        source={require('../../imagess/Timely/bg.png')}
        style={styles.imageBack}
       >
        <View style={{flex: 1}}>
          <View
            style={styles.head}>
            <Image
            source={{uri:this.state.profile}} alt="hii"
              //source={require('../../imagess/Timely/group_7.png')}
              style={{marginTop: 10, marginLeft: 160, width: 35, height: 35}}
            />
            {this.state.isOffice ? (
              <Text
                style={{...styles.headText,color: '#58b55a'}}
               >
                OFFICE
              </Text>
            ) : this.state.isWfh ? (
              <Text
              style={{...styles.headText,color:'#9958b5'}}
               >
                WFH
              </Text>
            ) : this.state.isLeave ? (
              <Text
              style={{...styles.headText,color:'#eb5b56'}}
             >
                LEAVE
              </Text>
            ) : (
              <Text
              style={{...styles.headText,color:'#58b55a'}}>
                OFFICE
              </Text>
            )}
          

            <Image
              source={require('../../imagess/Timely/switch.png')}
              style={{width: 20, height: 22, marginRight: 35}}
            />
          </View>
          <ScrollView>
          <Text style={styles.text}>CHOOSE YOUR WORK MODE</Text>
          <View style={{height: 100}}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                onPress={this.handleOffice}
                style={styles.touch}>

{this.state.isOffice?
                  <Image
                  source={require('../../imagess/Timely/tick_mark.png')}
                  style={styles.oval}
                  />
                  :
                  <Image 
                  source={require('../../imagess/Timely/oval.png')}
                  style={ styles.oval}
                  />             
}
                 
                <Text
                style={{...styles.textOffice,marginTop:5,marginLeft: 16}}
                >
                  OFFICE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleWFH}
                style={{...styles.touch, backgroundColor: '#9958b5'}}>
                  {this.state.isWfh?
                  <Image
                  source={require('../../imagess/Timely/tick_mark.png')}
                  style={styles.oval}
                  />
                  :
                  <Image 
                  source={require('../../imagess/Timely/oval.png')}
                  style={ styles.oval}
                  />             
}
                <Text
                 style={{...styles.textOffice,marginTop:1,marginLeft: 18}}
                 >
                  WFH
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleLeave}
                style={{...styles.touch, backgroundColor: '#eb5b56'}}>
              
                 {this.state.isLeave?
                  <Image
                  source={require('../../imagess/Timely/tick_mark.png')}
                  style={styles.oval}
                  />
                  :
                  <Image 
                  source={require('../../imagess/Timely/oval.png')}
                  style={ styles.oval}
                  />             
}
                <Text
                 style={{...styles.textOffice,marginTop:1,marginLeft: 19}}>
                  LEAVE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={{...styles.touch, backgroundColor: '#e5d23e' }}>
               
                <Text
                style={{...styles.textOffice,marginTop:25,marginLeft:19}}>
                  MEET
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={styles.choose}>CHOOSE WHEN</Text>
          <View>
          <View style={{...styles.rect, flexDirection: 'row'}}>
            <View style={{
                width: 140,
                    height: 65,
                    borderRadius: 5,
                    backgroundColor: "#191d2f",
                    borderColor:"#191d2f",
                    marginLeft:15,
                    marginTop:17,
                   color:'#737798'
            }}>
              <Text style={{ fontFamily: "AvenirNext",
  fontSize: 12,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
marginLeft:8,marginTop:4,
  color: "#c9d0db"}}>From</Text>
        <DatePicker
          style={{width:140}}
          date={this.state.date1} //initial date from state
          mode="date" //The enum of date, datetime and time
          //placeholder="From"
          
          format="YYYY-MM-DD"
          minDate="1996-01-01"
          maxDate="2022-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
         
         // iconSource={require('../../imagess/icon.png')}
           customStyles={{
          //   dateIcon: {
          //       position: 'absolute',
          //       left: 0,
          //       top: 4,
          //       marginLeft: 120,
          //       width: 17,
          //       height: 18,
          //       marginTop:25
          //     },
          dateText:{
            color:"#191d2f" 
          },
             dateInput: {
                width: 140,
               height:45,
               borderRadius: 5,
             //  marginTop:5,
                backgroundColor: "#191d2f",
                borderColor:"#191d2f",
               
             }
            //     marginLeft:15,
            //     marginTop:0,
            //     //color:'#737798'
            // }
          }}
          onDateChange={(date) => {this.setState({date1: date})}}
          
        />
         <Text style={{marginTop:-40,  fontFamily: "AvenirNext",marginLeft:8,
  fontSize: 20,
  fontWeight: "600",
  color: "#404358"}}>
           {/* {this.state.date1?<View style={{height:65,width:140,backgroundColor:'#191d2f',marginTop:5}}></View>:<View></View>} */}
       {this.state.date1? moment(this.state.date1).format('MMM D') : ''}
         </Text>
     <Text style={{
       fontFamily: "AvenirNext",
       fontSize: 14,
       fontWeight: "500",
       marginTop:-5,
       marginLeft:8,
       color: "#404358"
     }}>{this.state.date1 ? moment(this.state.date1).format('dddd') : ''}</Text>
     </View>
            {/* <DateFrom /> */}
            {/* <View style={styles.box1}>
              <Text
                style={{
                  color: '#c9d0db',
                  fontSize: 12,
                  marginLeft: 8,
                  marginTop: 4,
                }}>
                To
              </Text>
            </View> */}
            <View style={{
                width: 140,
                height: 65,
                borderRadius: 5,
                backgroundColor: "#191d2f",
                borderColor:"#191d2f",
                marginLeft:15,
                marginTop:17,
                color:'#737798'
            }}>
               <Text style={{ fontFamily: "AvenirNext",
  fontSize: 12,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
marginLeft:8,marginTop:4,
  color: "#c9d0db"}}>To</Text>
              <DatePicker
          style={{width:140}}
          date={this.state.date2} //initial date from state
          mode="date" //The enum of date, datetime and time
        //  placeholder="To"
          format="YYYY-MM-DD"
          minDate="1996-01-01"
          maxDate="2022-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
         // iconSource={require('../../imagess/icon.png')}
          customStyles={{
            dateText:{
              color:"#191d2f" ,
      
            },
           
            dateInput: {
                width: 130,
                height:40,
                backgroundColor: "#191d2f",
                borderColor:"#191d2f",
                borderRadius: 5,
                marginTop:5
            }
          }}
          onDateChange={(date)=>{this.handleDateChange(date)}}
          
        />
         <Text style={{marginTop:-40,  fontFamily: "AvenirNext",marginLeft:8,
  fontSize: 20,
  fontWeight: "600",
  color: "#404358"}}>
           {/* {this.state.date1?<View style={{height:65,width:140,backgroundColor:'#191d2f',marginTop:5}}></View>:<View></View>} */}
       {this.state.date2? moment(this.state.date2).format('MMM D') : ''}
         </Text>
     <Text style={{
       fontFamily: "AvenirNext",
       fontSize: 14,
       fontWeight: "500",
       marginTop:-5,
       marginLeft:8,
       color: "#404358"
     }}>{this.state.date2 ? moment(this.state.date2).format('dddd') : ''}</Text>
        </View>
        </View>
        {this.state.isLeave && this.state.noOfDays>0? <View style={{marginTop:-46,marginLeft:180}}>
     <Text style={{ fontStyle: 'italic', color: '#f9ca24', fontSize: 16, margin: 10 }}>
       Leave For {this.state.noOfDays} Days</Text>
       </View> : <View></View>}
          </View>

          <View style={{height: 50, width: 360}}>
            <Text style={styles.window}>CHOOSE A TIME WINDOW</Text>
            <Text style={{marginLeft: 110, color: '#ffffff'}}>
              
              10:00 AM - 06:00 PM
            </Text>
            <RangeSlider
              style={{width: 320, height: 60, marginLeft: 20, marginTop: -40}}
              gravity={'center'}
              min={0}
              max={82744000}
              valueType='time'
              textFormat='HH:mm'
              step={20}
              thumbRadius={15} //size of round
              selectionColor="#7a6311" //middle
              blankColor="#737798" //extra part
              thumbBorderColor="#f9ca24"
              thumbColor="#f9ca24" //round
               onValueChanged={(low, high, fromUser) => {
                this.setState({rangeLow: low, rangeHigh: high})
              }}
            />
          </View>
          {this.state.isOffice && (
            <View>
              <Text
                style={{...styles.comments, marginTop: 50, marginLeft: 130}}>
                COMMENTS
              </Text>
              <View style={styles.last}>
                <View
                  style={{
                    width: 296,
                    height: 58,
                    borderRadius: 5,
                    backgroundColor: '#191d2f',
                    marginLeft: 15,
                    marginTop: 11,
                    color: 'white',
                  }}>
                  <TextInput
                    placeholder="Enter custom text here..."
                    placeholderTextColor="#c6cbd3"
                    style={{
                      marginTop: -10,
                      fontFamily: 'AvenirNext',
                      fontSize: 12,
                      color: 'white',
                    }}
                    value={this.state.comment}
                    onChangeText={this.handleChange}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={styles.lastBut}
                    onPress={() => {
                      this.drop('Dropping my kid');
                    }}>
                    <Text style={{...styles.write, marginTop: 5}}>
                      Dropping{'\n'} my kid
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.lastBut}
                    onPress={() => {
                      this.head('Heading out for a lunch party');
                    }}>
                    <Text style={{...styles.write, marginTop: 5}}>
                      Heading out{'\n'}for a lunch{'\n'}party
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.lastBut}
                    onPress={() => {
                      this.leave('Leaving early for a movie');
                    }}>
                    <Text style={{...styles.write, marginTop: 5}}>
                      Leaving{'\n'} early for a{'\n'} movie
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
{this.state.isComment &&
              <TouchableOpacity style={{ width: 360,height: 48,marginTop:40, backgroundColor: "#f9ca24"}}>
              <Text style={styles.apply}>APPLY</Text>
            </TouchableOpacity>
  }
            </View>
           
          )}
          {/* {
  this.state.isWfh &&
  <Text>Hello why man</Text>
} */}

          {this.state.isWfh && (
            <View>
              <Text style={styles.comm}>CHOOSE HOW TO COMMUNICATE</Text>
              <View>
                <ScrollView horizontal>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/skype.png')}
                      style={styles.skype}
                     
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/call.png')}
                      style={styles.skype}
                     
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/email.png')}
                      style={styles.skype}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/call.png')}
                      style={styles.skype}
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>
            

              <View style={{marginBottom:40}}>
              <Text
                style={{...styles.comments, marginTop: 40, marginLeft: 130}}>
                COMMENTS
              </Text>
              <View style={styles.last}>
                <View
                  style={{
                    width: 296,
                    height: 58,
                    borderRadius: 5,
                    backgroundColor: '#191d2f',
                    marginLeft: 15,
                    marginTop: 11,
                    color: 'white',
                  }}>
                  <TextInput
                    placeholder="Enter custom text here..."
                    placeholderTextColor="#c6cbd3"
                    style={{
                      marginTop: -10,
                      fontFamily: 'AvenirNext',
                      fontSize: 12,
                      color: 'white',
                    }}
                    value={this.state.wfhComment}
                    onChangeText={this.handleWFHChange}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={styles.lastBut}
                    onPress={() => {
                      this.like("I'd like to stay indoors");
                    }}>
                    <Text style={{...styles.write, marginTop: 5}}>
                      I'd like to{'\n'} stay indoors
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.lastBut}
                    onPress={() => {
                      this.paper('Get some paper work');
                    }}>
                    <Text style={{...styles.write, marginTop: 5}}>
                      Get some{'\n'} paper work
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.lastBut}
                    onPress={() => {
                      this.work('Working out of native');
                    }}>
                    <Text style={{...styles.write, marginTop: 5}}>
                      Working out{'\n'} of native
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              </View>
              </View>
          )}

          {this.state.isLeave && (
            <View>
              <Text style={styles.comm}>CHOOSE HOW TO COMMUNICATE</Text>
              <View>
                <ScrollView horizontal>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/skype.png')}
                      style={styles.skype}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/call.png')}
                      style={styles.skype}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/email.png')}
                      style={styles.skype}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../imagess/Timely/call.png')}
                      style={styles.skype}
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>

              <Text style={styles.help}>WHO CAN HELP WHEN YOU ARE AWAY</Text>
              <View
                style={{
                  marginTop:16,
                  marginLeft:16,
                  width: 328,
                  height: 32,
                  borderRadius: 5,
                  marginLeft: 10,
                  backgroundColor: 'white',
                  color:'pink'
                  
                }}
              >
               
                  <Picker  
                  
                        selectedValue={this.state.alternative}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({alternative: itemValue})}  
                    >  
                    <Picker.Item label="Select an employee"/>
               {
                 this.state.backFill.map(user=>
                  <Picker.Item  value={user} label={user}/>)
               }
                </Picker>  
              
              </View>
          

  <View style={{marginBottom:40}}>
  <Text
    style={{...styles.comments, marginTop: 40, marginLeft: 130}}>
    COMMENTS
  </Text>
  <View style={styles.last}>
    <View
      style={{
        width: 296,
        height: 58,
        borderRadius: 5,
        backgroundColor: '#191d2f',
        marginLeft: 15,
        marginTop: 11,
        color: 'white',
      }}>
      <TextInput
        placeholder="Enter custom text here..."
        placeholderTextColor="#c6cbd3"
        style={{
          marginTop: -10,
          fontFamily: 'AvenirNext',
          fontSize: 12,
          color: 'white',
        }}
        value={this.state.leaveComment}
        onChangeText={this.handleLeaveChange}
      />
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.lastBut}
        onPress={() => {
          this.feel("I'am feeling sick");
        }}>
        <Text style={{...styles.write, marginTop: 5}}>
        I'am feeling{'\n'} sick
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.lastBut}
        onPress={() => {
          this.family('Have a family function');
        }}>
        <Text style={{...styles.write, marginTop: 5}}>
        Have a {"\n"}family function
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.lastBut}
        onPress={() => {
          this.native('Working out of native');
        }}>
        <Text style={{...styles.write, marginTop: 5}}>
          Working out{'\n'} of native
        </Text>
      </TouchableOpacity>
    </View>
    </View>
</View>
</View>



          )}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Work;
const styles = StyleSheet.create({
  image: {
    marginTop: 102,
    width: 115,
    height: 117,
    marginBottom: 30,
  },
  imageBack:{
    flex: 1,
    //postion: 'relative',
    width: 360,
    height: 650,
    alignItems: 'center',
    backgroundColor: 'rgba(11, 12, 31, 0.87)',
  },
  head:{
    flexDirection: 'row',
    width: 360,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText:{
    marginTop: 5,
    marginLeft: 12,
    marginRight: 100,
  },
  textOffice:{
    width: 58,
    height: 22,
    fontFamily: 'AvenirNext',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#ffffff',
  },
  text: {
    width: 226,
    height: 22,
    fontFamily: 'AvenirNext',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#737798',
    marginTop: 30,
    marginLeft: 65,
  },
  touch: {
    width: 85,
    height: 75,
    borderRadius: 5,
    backgroundColor: '#58b55a',
    marginHorizontal: 10,
    marginTop: 10,
  },
  choose: {
    marginTop: 15,
    marginLeft: 20,
    width: 303,
    height: 22,
    fontFamily: 'AvenirNext',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#737798',
  },
  rect: {
    width: 328,
    height: 123,
    borderRadius: 5,
    backgroundColor: '#0f121d',
    marginLeft: 18,
    marginTop: 8,
  },
  window: {
    fontFamily: 'AvenirNext',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    color: '#737798',
    marginTop: 15,
  },
  skype:{
    width: 85,
    height: 80,
    marginTop: 20,
    marginHorizontal: 10,
  },
  box1: {
    width: 140,
    height: 65,
    borderRadius: 5,
    backgroundColor: '#191d2f',
    marginLeft: 15,
    marginTop: 15,
  },
  last: {
    width: 328,
    height: 138,
    borderRadius: 5,
    backgroundColor: '#0f121d',
    marginLeft: 15,
    marginTop: 7,
  },
  lastBut: {
    width: 88,
    height: 48,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: '#191d2f',
  },
  comments: {
    fontFamily: 'AvenirNext',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    //textAlign: "center",
    letterSpacing: 0.5,
    color: '#737798',
  },
  write: {
    fontFamily: 'AvenirNext',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#737798',
  },
  comm: {
    width: 303,
    fontFamily: 'AvenirNext',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#737798',
    marginTop: 50,
    marginLeft: 30,
  },
  help: {
    fontFamily: 'AvenirNext',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    //textAlign: 'center',
    color: '#737798',
    marginTop:40,
    marginLeft:35

  },
  oval:{
    width: 16,
    height: 16,
    borderStyle: "solid",
    borderWidth: 2,
   marginLeft:60,
   marginTop:10
  },
  apply:{
   marginTop:13,
    fontFamily: "AvenirNext",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000"
  }
});
