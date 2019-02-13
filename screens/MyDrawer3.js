import React from 'react'
import { Button, Image,View,Text, StyleSheet} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Tvpage';
import Header from './Header';

class MyHomeScreen extends React.Component {

  constructor(props){
    super(props)
  }

   static navigationOptions = {
     drawerLabel:  ()=>(
         <Text style={{color:"white",marginLeft:10,fontSize:15,padding:20}}> Home</Text>
         ),
     drawerIcon: ({ tintColor }) => (
       <Image
       source={{uri : 'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png'}}
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
   };
   render() {
     return (

      <View>
    
       
      <HomeScreen openDrawer = {
           this.props.navigation.openDrawer
         }/>
         <Text>Third home Screen</Text>


         </View>
       
     );
   }
 }

 class MyNotificationsScreen extends React.Component {
   static navigationOptions = {
     drawerLabel:  ()=>(
         <Text style={{color:"white",marginLeft:10,fontSize:15,padding:20}}> Profile</Text>
         ),
     drawerIcon: ({ tintColor }) => (
       <Image
         source={{uri : "https://cdn.onlinewebfonts.com/svg/img_87237.png"}}
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
   };

   render() {
     return (
       <View>
         
         < Header openDrawer = {
           this.props.navigation.openDrawer
         }
         />
         <Text>third Profile Screen</Text>


          <Button
         onPress={() => this.props.navigation.goBack()}
         title="Go back home"
       />

       </View>
      
     );
   }
 }

 const styles = StyleSheet.create({
   icon: {
     width: 24,
     height: 24,
   },
 });

 const DrawerNavigator = createDrawerNavigator({
   
   Home: {
     screen: MyHomeScreen,
   },
   Profile: {
     screen: MyNotificationsScreen,
   },
 }, {
   style: {
     backgroundColor: '#1a1a1a',
     color: "white"
   }
 });

 export default createAppContainer(DrawerNavigator);