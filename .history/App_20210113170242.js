import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React, { useEffect, useState } from 'react';
import Loading from './loading';
import * as Location from 'expo-location';
import axios from 'axios';

// export default class extends React.Component  {
//   state={
//     isLoding : true
//   }
//   getLocation = async() =>{
//     try{
//       await Location.requestPermissionsAsync();
//       const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
//       this.setState({isLoding:false})
//     }catch(error){
//       Alert.alert("Cat find you", "so sad");
//     }

//   };
//   componentDidMount(){
//     this.getLocation();
//   }
//   render(){
//     const {isLoding} = this.state;
//     return isLoding ? <Loading/> : null;
//   }
// }

const API_KEY = "9e0bfa2c5f6975bf6890d7892b8f2c06";
// api.openweathermap.org/data/2.5/weather?lat=35.544829899999996&lon=129.3517382&appid=9e0bfa2c5f6975bf6890d7892b8f2c06

const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const getWeather = async(latitude, longitude) =>{

  }
  const getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude)
      console.log(latitude,longitude);
    }catch(error){
      Alert.alert("Cat find you", "so sad");
    }}
  useEffect(()=>{
    getLocation();
  }) 

  
  return isLoading ? <Loading></Loading> : null;
}

export default App;