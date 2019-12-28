import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import StackNavigation from './StackNav';
import StackNavigation2 from './StackNav2';
import StackNavigation3 from './StackNav3';

// console.disableYellowBox = true;
// require('why-did-you-update').whyDidYouUpdate(require('react'), { exclude: /^YellowBox/ });

class HomeScreen extends React.Component {
  static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
       <Image
         source={{uri : "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"}}
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
   };
  render() {
    return (
      <StackNavigation />
    );
  }
}

class Movie extends React.Component {
   static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
       <Image
         source = {
           {
             uri: "https://cdn2.iconfinder.com/data/icons/cinema-icons/38/1-512.png"
           }
         }
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
   };
  render() {
    return (<StackNavigation2 />);
  }
}

class Tv extends React.Component {
   static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
       <Image
         source = {
           {
             uri: "https://cdn4.iconfinder.com/data/icons/media-collection/17/029-play_TV-512.png"
           }
         }
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
   };
  render() {
    return (
      <StackNavigation3 />
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Movies: Movie,
  Tv : Tv
}, {
  tabBarOptions: {
    activeTintColor:'gold',
    style: {
      backgroundColor: '#1a1a1a',
      height:50
    }
  }
});

export default createAppContainer(TabNavigator);