import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Slider from 'react-native-slider';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'rgba(11, 12, 31, 0.87)'}}>
        <View style={{position: 'relative'}}>
          <Image
            style={StyleSheet.backgroundImage}
            source={require('../images/loginbg.png')}
          />
        </View>
        <View style={{position: 'absolute'}}>
          <View>
            <Image
              source={require('../images/logo1.png')}
              style={styles.imageLogo}
            />
            <Text style={styles.office}>OFFICE</Text>
            <Image
              source={require('../images/switch.png')}
              style={styles.switch}
            />
          </View>
          <View style={{marginTop: 25}}>
            <Text style={styles.workMode}>CHOOSE YOUR WORK MODE</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.greenBox}>
              <Image
                source={require('../images/tick.png')}
                style={styles.tick}
              />
              <Text style={styles.boxText}>OFFICE</Text>
            </View>
            <View style={styles.purpleBox}>
              <Image
                source={require('../images/oval.png')}
                style={styles.oval}
              />
              <Text style={{...styles.boxText, marginLeft: 11}}>WFH</Text>
            </View>
            <View style={styles.redBox}>
              <Image
                source={require('../images/oval.png')}
                style={styles.oval}
              />
              <Text style={styles.boxText}>LEAVE</Text>
            </View>
          </View>
          <View>
            <Text style={styles.chooseWhen}>CHOOSE WHEN</Text>
          </View>
          <View
            style={{
              borderRadius: 1,
              marginHorizontal: 10,
              marginTop: 5,
              backgroundColor: '#0f121d',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={styles.dateBox}>
              <Text style={styles.from}>From</Text>
              <Text style={styles.day}>MAR 26</Text>
              <Text style={styles.date}>Thursday</Text>
            </View>
            <View style={styles.dateBox}>
              <Text style={styles.from}>To</Text>
              <Text style={styles.day}>MAR 26</Text>
              <Text style={styles.date}>Thursday</Text>
            </View>
          </View>
          <View>
            <Text style={styles.chooseWhen}>CHOOSE A TIME WINDOW</Text>
          </View>
          <View style={{marginLeft: 70, marginTop: 3}}>
            <Text style={styles.time}>10.00 AM - 6.00 PM</Text>
            <Slider trackStyle={styles.track} thumbStyle={styles.thumb} />
          </View>
          <View>
            <Text style={styles.chooseWhe}>COMMENTS</Text>
          </View>
          <View style={{backgroundColor: '#0f121d', margin: 8, marginTop: -1}}>
            <View style={styles.msgBox}>
              <Text style={styles.msgText}>Enter Custom Text here</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.msgSub}>
                <Text style={styles.msgText}>Dropping my kid</Text>
              </View>
              <View style={styles.msgSub}>
                <Text style={styles.msgText}>
                  Heading out for a lunch party
                </Text>
              </View>
              <View style={styles.msgSub}>
                <Text style={styles.msgText}>Leaving early for a movie</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  imageLogo: {
    width: 55,
    height: 55,
    marginLeft: 160,
    marginTop: 15,
  },
  office: {
    fontFamily: 'AvenirNext',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#58b55a',
    marginLeft: 225,
    marginTop: -39,
  },
  switch: {
    width: 28,
    height: 31,
    marginLeft: 365,
    marginTop: -26,
  },
  workMode: {
    fontFamily: 'AvenirNext',
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1,
    textAlign: 'center',
    color: '#737798',
    textAlign: 'center',
  },
  greenBox: {
    width: 100,
    height: 90,
    borderRadius: 5,
    backgroundColor: '#58b55a',
    margin: 20,
    position: 'relative',
  },
  purpleBox: {
    width: 100,
    height: 90,
    borderRadius: 5,
    backgroundColor: '#9958b5',
    margin: 20,
    position: 'relative',
  },
  redBox: {
    width: 100,
    height: 90,
    borderRadius: 5,
    backgroundColor: '#eb5b56',
    margin: 20,
    position: 'relative',
  },
  boxText: {
    fontFamily: 'AvenirNext',
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  tick: {
    width: 18,
    height: 18,
    position: 'absolute',
    marginLeft: 75,
    marginTop: 5,
  },
  oval: {
    width: 18,
    height: 18,
    position: 'absolute',
    marginLeft: 75,
    marginTop: 5,
  },
  chooseWhen: {
    fontFamily: 'AvenirNext',
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1,
    textAlign: 'center',
    color: '#737798',
    marginTop: 5,
  },

  chooseWhe: {
    fontFamily: 'AvenirNext',
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1,
    textAlign: 'center',
    color: '#737798',
    marginTop: -5,
  },
  dateBox: {
    width: 160,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#191d2f',
    margin: 10,
    marginTop: 15,
    marginBottom: 20,
    paddingLeft: 9,
  },
  from: {
    fontFamily: 'AvenirNext',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    // textAlign: "center",
    color: '#c9d0db',
  },
  date: {
    fontFamily: 'AvenirNext',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#404358',
    paddingTop: 4,
  },
  day: {
    fontFamily: 'AvenirNext',
    fontSize: 23,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#404358',
    paddingTop: 6,
  },
  track: {
    width: 280,
    backgroundColor: '#f9ca24',

    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  thumb: {
    width: 32,
    height: 32,
    backgroundColor: '#f9ca24',
    borderRadius: 100,
    // borderBottomRightRadius: 50,
    // borderTopRightRadius: 50,
  },
  time: {
    fontFamily: 'AvenirNext',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    marginLeft: 79,
  },
  msgBox: {
    width: 370,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#191d2f',
    marginHorizontal: 15,
    marginVertical: 10,
    paddingLeft: 12,
  },
  msgSub: {
    width: 100,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#191d2f',
    marginBottom: 14,
    marginHorizontal: 12,
    paddingLeft: 5,
  },
  msgText: {
    fontFamily: 'AvenirNext',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    // textAlign: "center",
    color: '#c9d0db',
  },
}); 