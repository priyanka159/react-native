import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image} from 'react-native';
import styles from './styles'
class card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render() {
    console.log('Hello',this.props)
    return (
      <View style={{flexDirection:'row',margin:10,height:111,width:360,marginBottom:25}}>
        <View style={{ width:110,margin:2,height: 87,borderRadius:3,backgroundColor: "#ffffff"}}>
        
      <Text style={styles.offerText}> <Text style={{color:"#83dc6d",fontFamily: "OpenSans",fontSize: 15,fontWeight:"bold"}}>100 </Text>OFFERS</Text>
      <Text style={styles.forThis}>₹200 for this pack</Text>
      <View style={styles.line}>
      </View>
     <TouchableOpacity  style={{flexDirection:'row'}}
     onPress={()=>this.props.handlePress(100)}
      >
       <Text style={styles.buyNow}>Buy Now</Text>
       <Image source={require('../../imagess/shapa.png')} style={{width: 12.8,height: 8,marginLeft:35,marginTop:10}}/>
     </TouchableOpacity>

      </View>
        <View style={{ width: 110, height: 87, margin:2,borderRadius: 3,backgroundColor: "#ffffff"}}>
      <Text style={styles.offerText}><Text style={{color:"#83dc6d",fontFamily: "OpenSans",fontSize: 15,fontWeight:"bold"}}>300 </Text> OFFERS</Text>
      <Text style={styles.forThis}>₹550 for this pack</Text>
      <View style={styles.line}>
      </View>
      <TouchableOpacity style={{flexDirection:'row'}}
     onPress={()=>this.props.handlePress(300)}
      >
       <Text style={styles.buyNow}>Buy Now</Text>
       <Image source={require('../../imagess/shapa.png')} style={{width: 12.8,height: 8,marginLeft:35,marginTop:10}}/>
     </TouchableOpacity>

      </View>
        <View style={{ width: 110, height: 87,margin:2,borderRadius: 3,backgroundColor: "#ffffff"}}>
      <Text style={styles.offerText}><Text style={{color:"#83dc6d",fontFamily: "OpenSans",fontSize: 15,fontWeight:"bold"}}>500 </Text> OFFERS</Text>
      <Text style={styles.forThis}>₹900 for this pack</Text>
      <View style={styles.line}>
      </View>
      <TouchableOpacity style={{flexDirection:'row'}}
     onPress={()=>this.props.handlePress(500)}
      >

       <Text style={styles.buyNow}>Buy Now</Text>
       <Image source={require('../../imagess/shapa.png')} style={{width: 12.8,height: 8,marginLeft:35,marginTop:10}}/>
     </TouchableOpacity>
      </View>
      </View>
    );
  }
}

export default card;
