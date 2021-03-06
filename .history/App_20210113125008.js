import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './loading';
import * as Location from 'expo-location';

export default class extends React.Component  {
  getLocation = async() =>{
    const location = Location.getCurrentPositionAsync();
    console.log(location);
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading/>
  }
}
