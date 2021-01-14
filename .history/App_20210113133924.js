import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React, { useEffect } from 'react';
import Loading from './loading';
import * as Location from 'expo-location';

// export default class extends React.Component  {
//   getLocation = async() =>{
//     try{
//       await Location.requestPermissionsAsync();
//       const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
//     }catch(error){
//       Alert.alert("Cat find you", "so sad");
//     }

//   };
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     return <Loading/>
//   }
// }



const App = (props) => {
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
    }catch(error){
      Alert.alert("Cat find you", "so sad");
    }
  useEffect(()=>{this.getLocation()});

  
  return(<Loading></Loading>);
}
      
