import React, { Component } from 'react';
//import react in our code. 
import {View, StyleSheet} from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class UpDate extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:""}
  }

  render(){
    return (
      <View style={styles.container}>

        <DatePicker
          style={{width:160,height:42}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="From"
          
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require('../../imagess/calendar.png')}
          customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 120,
                width:22,
                height:21,
                marginTop:10
              },
            
            dateInput: {
                 width:109,
    height: 42,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dfdfdf",
    marginTop:11,
    paddingRight:80,
    
            }
          }}
          onDateChange={(date) => {this.setState({date:date})}}
        />

      </View>
    )
  }
}
const styles = StyleSheet.create ({

})