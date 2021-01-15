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
  const [temp, setTemp] = useState();
  const [nowweather, setNowWeather] = useState();
  const [city, setCity] = useState();
  

  // const weathers = ['Thunderstorm','Dizzle','Rain','Snow','Atmosphere','Clear','Clouds','Haze','Mist','Dust'];

  const getWeather = async(latitude, longitude) =>{
      const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        setIsLoading(true);
        const ntemp = data.main.temp;
        setTemp(ntemp);
        const nweather = data.weather[0].main;
        setNowWeather(nweather);
        const ncity = data.name;
        setCity(ncity);
  };
  const getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    }catch(error){
      Alert.alert("Can't find you", "so sad");
    }}
  useEffect(()=>{
    getLocation();
  },[isLoading]);

  
  return (isLoading ? <Loading/> : <Weather temp={temp} weather={nowweather} city={city}/>);
};

export default App;

//Math.round(temp)