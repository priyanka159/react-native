import React, {Component} from 'react';
import {View, Text,Modal,TouchableOpacity} from 'react-native';
import styles from './styles'
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      console.log(this.props)
    return (

      <View>
        <Modal transparent={true} visible={this.state.show}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 320,
                height: 104,
                borderRadius: 3,
                backgroundColor: '#fae055',
              }}>
              <Text style={styles.great}>
                Great {'\n'} You have save 20 INR
              </Text>
            </View>
            <View style={{width: 320, height: 200, backgroundColor: 'white'}}>
              <Text style={{margin: 20, padding: 10}}>
                Thank you for visiting our store.{'\n'}
                Hope to see you again.
              </Text>
              <TouchableOpacity
                style={styles.back}
                onPress={() => {
                  this.setState({show: false});
                }}>
                <Text style={{color: 'red'}}>BACK TO HOME</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Popup;
