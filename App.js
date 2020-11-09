import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import FirstScreen from './screens/FirstScreen';
// import Login from './screens/Login';

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
