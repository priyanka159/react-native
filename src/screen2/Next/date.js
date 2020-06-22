import React, { Component } from 'react';
//import react in our code. 
import {View, StyleSheet} from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class Date extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:""}
  }

  render(){
    return (
      <View style={styles.container}>

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
          onDateChange={(date) => {this.setState({date: date})}}
        />

      </View>
    )
  }
}
const styles = StyleSheet.create ({

})