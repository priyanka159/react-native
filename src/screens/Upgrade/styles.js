import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1,
       // alignItems:"center"
        //justifyContent:"center"
    },
    textInput: {
        width: 340,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        marginLeft:10

    },
    button1:{
marginLeft:10,
width: 65,
height: 32,
marginTop:10,
borderRadius: 3,
backgroundColor: "#ffffff",
borderStyle: "solid",
borderWidth: 1,
borderColor: "#dddddd"
    },
    button:{//different button
        width: 65,
  height: 32,
  marginLeft:5,
  marginTop:10,
  borderRadius: 3,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#dddddd"
    },
    text:{
        marginTop:30,
        marginLeft:10,
        width: 310,
        height: 20,
        fontFamily: "Lato",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.34,
        textAlign: "left",
        color: "#000000"
    },
    enter:{
        marginTop:20,
        marginLeft:10,
        marginBottom:10,
         width: 153,
         height: 19,
         fontFamily: "Lato",
         fontSize: 16
    },
    rect:{
        flexDirection:'row',
        marginLeft:10,
        marginBottom:39,
        width: 340,
  height: 50,
  borderRadius: 2,
  backgroundColor: "#f9fcff"
    },
    select:{
        
        width: 304,
        height: 19,
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
    },
    zero:{
        marginLeft:140,
        width: 38,
        height: 25,
        fontFamily: "OpenSans",
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        textAlign: "right",
        color: "red"
    },
   submit:{
       marginBottom:30,
       marginLeft:10,
    width: 340,
    height: 49,
    borderRadius: 3,
    backgroundColor: "#fb345c"
   } ,
   proceed:{
      marginTop:15,
      
    marginLeft:70,
    width: 184,
    height: 17,
    fontFamily: "Lato",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
   },
   rec3:{ 
    width: 40,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#ffffff"
   },
   great:{
       marginTop:25,
        marginLeft:35,
    width: 250,
    height: 56,
    fontFamily: "Lato",
    fontSize: 23,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0.39,
    textAlign: "center",
    color: "#000000"
   },
   thank:{
       marginTop:20,
    width: 320,
    height: 38,
    fontFamily: "Lato",
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0.76,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.87)"
   },
   back:{
       color:"#fb345c",
       marginTop:10,
       marginBottom:20,
       marginLeft:50,
    width: 132,
    height: 14,
    fontFamily: "Lato",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0.82,
    textAlign: "center",
    
   },
   offerText:{
       marginTop:6,
    width: 90,
    height: 20,
    fontFamily: "OpenSans",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
   },
   forThis:{
    width: 98,
    height: 12,
    margin:4,
    fontFamily: "OpenSans",
    fontSize: 11.9,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 11.9,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
   },
   buyNow:{
       marginLeft:10,
       marginTop:10,
    width: 39,
    height: 15,
    opacity: 0.34,
    fontFamily: "Lato",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
   },
   line:{
    width: 110,
    height: 2,
    opacity: 0.6,
    marginTop:10,
    backgroundColor: "#ebedf0"
   },
   youAre:{
       marginLeft:15,
       color:"red",
    width: 126,
    height: 12,
    fontFamily: "OpenSans",
    fontSize: 9,
    fontWeight: "normal",
    marginBottom:11
   }
})
export default styles