import React from 'react';
import {
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MyDrawer from './MyDrawer';
import MyDrawer2 from './MyDrawer2';
import MyDrawer3 from './MyDrawer3';
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
      // <Text>FirstScreen</Text>
      <MyDrawer />
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
    return (
      // <Text>Second Screen</Text>
        <MyDrawer2 type={"movieScreen"}/>
      
    );
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

      // <Text>Third Screen</Text>
         <MyDrawer3 type={"tvScreen"}/>
      
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
    style: {
      backgroundColor: '#1a1a1a',
      height:50
    }
  }
});

export default createAppContainer(TabNavigator);