import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { AppNavigator } from './src/navigation/RootNavigation';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <StatusBar
            backgroundColor={'#000'}
            barStyle="light-content"
            hidden={false}
          />
          <AppNavigator />
        </View>
      </SafeAreaView>
    );
  }
}