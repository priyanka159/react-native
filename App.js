import React from 'react';
import {Provider} from 'react-redux'
import { View, StatusBar, SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/RootNavigation';
import configureStore from './src/store/configureStore'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store=configureStore()
    console.log(store.getState(),'index store')
    
    
    store.subscribe(()=>{
        console.log(store.getState())
    })
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
      <Provider store={store}>
          <AppNavigator />
          </Provider>
        </View>
      </SafeAreaView>
    );
  }
}