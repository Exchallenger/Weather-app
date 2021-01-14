import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Ionicons,Feather,FontAwesome,FontAwesome5} from '@expo/vector-icons';
import moment from 'moment';

const Weather = ({temp, weather, city}) => {
    const [date, setDate] = useState(ndate);
    const ndate = moment().format(' h:mm \n MMMM Do dddd,');
    useEffect(()=>{
        setDate(ndate);
    })
 //['Thunderstorm','Dizzle','Rain','Snow','Atmosphere','Clear','Clouds','Haze','Mist','Dust']

    switch(weather){
        case 'Clear':
            var nweather = 'sunny';
        case 'Rain':
            nweather = 'rainy';
        case 'Snow':
            nweather = 'snow';
        case 'Clouds':
            nweather = 'cloudy';
        default:
            nweather='cog';


    }

    return (
        <>
        
        <View style={styles.container}>
        <Text>{date}</Text>
        <Ionicons name={nweather} size={24} color="red" />
        <Text> {temp}℃, {weather} {city} hi</Text>
        </View>
        </>);
    }

    

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            color:"black",
            backgroundColor:"yellow"
        }
    });

export default Weather;