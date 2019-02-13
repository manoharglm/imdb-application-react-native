
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './store';
import Home from './screens/Home';
// import FirstScreen from './screens/FirstScreen';
import { Provider } from 'react-redux'
import FirstScreen from './screens/FirstScreen';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FirstScreen />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
