import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Movies from './Movies';
import TVShows from './TVShows';

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    console.log('manohar second page',this.props.navigation);
    
    const {id , type } = this.props.navigation.state.params
    if(type === 'movie'){
      return(<Movies onCardClick={this.props.navigation} id={id}/>)
    }
    else return(<TVShows onCardClick={this.props.navigation} id={id}/>)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
});