/**
 * @format
 */

import {AppRegistry} from 'react-native'; 
import App from './App';

import Payment from './src/screens//Payment/payment'
import {name as appName} from './app.json';
import Restaurant from './src/screens/Restaurant/restaurant';

AppRegistry.registerComponent(appName, () => App);
