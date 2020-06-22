import React from 'react';
import { View,Text ,Image,StyleSheet,TouchableOpacity} from 'react-native';
import shape from '../../imagess/shape.png'
export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hii",this.props)
    return (
    <View style={styles.container}>
    <Image source={shape} style={{ width: 88,
  height: 88}}/>
       <Text style={styles.paymentSuccess}>PAYMENT SUCCESSFUL</Text>
       <Text style={styles.logoText}>Lorem ipsum dolor sit amet,{'\n'}
            consectetur adipisicing elit,sed do{'\n'}
             eiusmod tempor </Text>
             <TouchableOpacity  onPress={()=>{this.props.pro.navigation.navigate('Restaurant')}} style={{ width: 270,
    height: 51,
    borderRadius: 25.5,
    borderStyle: "solid",
    borderWidth: 1,
    marginTop:35,
    borderColor: "#ffffff"
    }}>
          <Text style={styles.buttonText}>CONTINUE WITH THE</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const  styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    payment:{
        width: 218,
        height: 22,
        fontFamily: "Lato",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 1.06,
        textAlign: "center",
        color: "#ffffff"
    },
    paymentSuccess:{
        width: 218,
        height: 22,
        fontFamily: "Lato",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 1.06,
        textAlign: "center",
        color: "#ffffff",
        marginVertical:22
    },
    logoText:{
        width: 275,
        height: 60,
        fontFamily: "OpenSans",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1,
        textAlign: "center",
        color: "#ffffff"
        },
        buttonText:{
            width: 202,
            height: 22,
            fontFamily: "Lato",
            fontSize: 14,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.82,
            textAlign: "right",
            color: "#ffffff",
            marginTop:12
           }
 } )