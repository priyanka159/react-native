import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import Cup from '../../imagess/cup.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Restaurant(props) {
  let array = [
    {
      id: '1',
      title: 'Cafe Coffee Day',
      description: '10% off on any product whenever you visit our store',
      image: require('../../imagess/bitmap.png'),
      address: '10 Km away',
    },
    {
      id: '2',
      title: 'Baskin Robin',
      description: '20% off on any product whenever        you visit our store',
      image: require('../../imagess/bitmap_copy.png'),
      address: '15 Km away',
    },
    {
      id: '3',
      title: 'KFC',
      description: '40% off on any product whenever you visit our store',
      image: require('../../imagess/bitmap_copy_3.png'),
      address: '10 Km away',
    },
    {
      id: '4',
      title: 'Goli Vada Pav No.1',
      description: '20% off on any product whenever you visit our store',
      image:require('../../imagess/bitmap_copy_2.png'),
      address: '9867542345',
    },
    {
      id: '5',
      title: 'Cafe Coffee Day',
      description: '10% off on any product whenever you visit our store',
      image: require('../../imagess/bitmap.png'),
      address: '10km away',
    },
    {
      id: '6',
      title: 'Cafe Coffee Day',
      description: '20% off on any product whenever you visit our store',
      image:require('../../imagess/bitmap.png'),
      address: '20km away',
    },
  ];

  return (
    
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Cup} style={{width: 360, height: 115,marginBottom:10,}}>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 22,
            letterSpacing: 2,
            fontWeight: 'bold',
            fontSize: 20,
            
          }}>
          Great!
        </Text>
        <Text
          style={{
           
            fontFamily: ".SFNSText",
            fontSize:16.5,
            marginLeft: 12,
            letterSpacing: 1.8,
            padding: 5,
          }}>
          You are loyal customer{'\n'}
         
          for 6 shops
          
        </Text>
      </ImageBackground>

      <FlatList
        data={array}
        renderItem={({item}) => (
          <Item
            title={item.title}
            image={item.image}
            description={item.description}
            address={item.address}
          />
        )}
        keyExtractor={(item,index) => index.toString()}
      />
<TouchableOpacity 
onPress={()=>{props.navigation.navigate('Upgrade')}}
style={{flexDirection:'row', width: 360, height: 47, opacity: 0.95, backgroundColor: "#fb345c"}}>
  <View style={{flexDirection:'row'}}>
  <Image source={require('../../imagess/tracker.png')} style={{ width: 20,height: 20,marginLeft:41,marginTop:15}}/>
<Text style={styles.touch1}>Offers nearby</Text>
</View>
<View style={styles.line}></View>
<View style={{flexDirection:'row'}}>
<Image source={require('../../imagess/store.png')} style={{ width: 20,height: 20,marginLeft:30,marginTop:12}}/>
<Text style={styles.touch2}>Check in Offers</Text>
</View>
</TouchableOpacity>

     
    
    </SafeAreaView>
  );
}

export default Restaurant;

function Item(props) {
  console.log(props);
  return (
    <ScrollView style={{flex: 1,marginLeft:10,marginRight:10,marginBottom:6}}>
      {/* {require('../../imagess/ccd.jpg')}  */}
      <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row',width: 340,height: 100, borderRadius: 3}}>
        <View style={{flex: 1}}>
          <Image
            source={props.image}
            style={{width: 87, height:78, marginLeft: 10,borderRadius:3,marginTop:13,marginBottom:15}}
          />
        </View>

        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.des}>{props.description}</Text>
          <Text style={styles.km}>{props.address}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    
    marginTop:13,
    width: 139,
    height: 17,
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.82,
    textAlign: 'left',
    color: '#000000',
  },
  des: {
    marginTop:5,
    width: 238,
    height: 35,
    opacity: 0.69,
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0.7,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  km: {
    marginTop:7,
    width: 116.4,
    height: 16,
    opacity: 0.69,
    fontFamily: '.SFNSText',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: 1,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  touch1:{
    marginTop:15,
    
    width: 100,
  height: 15,
  fontFamily: "Lato",
  fontSize: 13,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 15,
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff"
  },
  touch2:{
    marginTop:15,
    marginLeft:5,
    width: 90,
  height: 15,
  fontFamily: "Lato",
  fontSize: 13,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 15,
  letterSpacing: 0,
  textAlign: "center",
  color: "#ffffff"
  },
  line:{
    marginLeft:24,
    marginTop:5,
    width: 2,
    height: 34,
    opacity: 0.65,
    backgroundColor: "#ffffff"
  }
});
