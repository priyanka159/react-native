import React, { Component } from 'react';
//import react in our code. 
import {View, StyleSheet} from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class DateFrom extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:""}
  }

  render(){
    return (
      <View style={styles.container}>

        <DatePicker
          style={{width:140}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="From"
          
          format="MMMM DD "
          minDate="01-01-2016"
          maxDate="01-01-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
         // iconSource={require('../../imagess/icon.png')}
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
                width: 140,
                height: 65,
                borderRadius: 5,
                backgroundColor: "#191d2f",
                borderColor:"#191d2f",
                marginLeft:15,
                marginTop:55,
                color:'#737798'
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