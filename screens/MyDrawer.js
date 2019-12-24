// import React from 'react'
// import { Button, Image,View,Text, StyleSheet} from 'react-native';
// import {createDrawerNavigator, createAppContainer} from 'react-navigation';
// import HomeScreen from './Homepage';
// import Header from './Header';
// import UserProfile from './UserProfile'
// import { ScrollView } from 'react-native-gesture-handler';

// class MyHomeScreen extends React.Component {

//   constructor(props){
//     super(props)
//   }
//    static navigationOptions = {
//      drawerLabel:  ()=>(
//          <Text style={{color:"white",marginLeft:10,fontSize:15 ,padding:20}}> Home</Text>
//          ),
//      drawerIcon: ({ tintColor }) => (
//        <Image
//        source={{uri : 'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png'}}
//          style={[styles.icon, {tintColor: tintColor}]}
//        />
//      ),
//    };
//    render() {
//      return (
//       <View>
//       <HomeScreen openDrawer = {
//            this.props.navigation.openDrawer
//          }/>
//          <Text>First Home Screen</Text>
//          </View>
       
//      );
//    }
//  }

//  class MyNotificationsScreen extends React.Component {
//    static navigationOptions = {
//      drawerLabel:  ()=>(
//          <Text style={{color:"white",marginLeft:10,fontSize:15,padding:20}}> Profile</Text>
//          ),
//      drawerIcon: ({ tintColor }) => (
//        <Image
//          source={{uri : "https://cdn.onlinewebfonts.com/svg/img_87237.png"}}
//          style={[styles.icon, {tintColor: tintColor}]}
//        />
//      ),
//    };

//    render() {
//      return (
//         <UserProfile openDrawer={this.props.navigation.openDrawer}/>
//      );
//    }
//  }

//  const styles = StyleSheet.create({
//    icon: {
//      width: 24,
//      height: 24,
//    },
//  });

//  const DrawerNavigator = createDrawerNavigator({
   
//    Home: {
//      screen: MyHomeScreen,
//    },
//    Profile: {
//      screen: MyNotificationsScreen,
//    }
//  }, {
//      style: {
//        backgroundColor: '#1a1a1a',
//        color : "white"
//      }
//  });

//  export default createAppContainer(DrawerNavigator);