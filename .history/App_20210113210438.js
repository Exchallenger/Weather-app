import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React, { useEffect, useState } from 'react';
import Loading from './loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './weather';

const API_KEY = "9e0bfa2c5f6975bf6890d7892b8f2c06";
// api.openweathermap.org/data/2.5/weather?lat=35.544829899999996&lon=129.3517382&appid=9e0bfa2c5f6975bf6890d7892b8f2c06

const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const getWeather = async(latitude, longitude) =>{
      var data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        console.log(data);
        setIsLoading(false);
  };
  const getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    }catch(error){
      Alert.alert("Cat find you", "so sad");
    }}
  useEffect(()=>{
    getLocation();
  }) 

  
  return isLoading ? <Loading></Loading> : <Weather temp={data.data.main.temp}/>;
}

export default App;