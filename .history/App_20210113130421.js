import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from './loading';
import * as Location from 'expo-location';

export default class extends React.Component  {
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location.coords.latitude, location.coords.longitude);
    }catch(error){
      Alert.alert("Cat find you", "so sad");
    }

  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading/>
  }
}
