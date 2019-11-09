import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './store';
import { Provider } from 'react-redux'
import FirstScreen from './screens/FirstScreen';
import Login from './screens/Login'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Login/> */}
        <FirstScreen />
      </Provider>
    );
  }
}

