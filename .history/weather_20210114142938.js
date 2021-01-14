import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Ionicons,Feather,FontAwesome,FontAwesome5} from '@expo/vector-icons';
import moment from 'moment';

const Weather = ({temp, weather, city}) => {
    const [date, setDate] = useState(ndate);
    const ndate = moment().format('LL');
    useEffect(()=>{
        setDate(ndate);
    })
 //['Thunderstorm','Dizzle','Rain','Snow','Atmosphere','Clear','Clouds','Haze','Mist','Dust']
    if(weather !== undefined){
        switch(weather){
        case 'Clear':
            var nweather = 'sunny';
            var ncolor = 'red';
            break;
        case 'Rain':
            nweather = 'rainy';
            ncolor = 'blue'
            break;
        case 'Snow':
            nweather = 'snow';
            ncolor = 'white';
            break;
        case 'Clouds':
            nweather = 'cloudy';
            ncolor = 'grey';
            break;
        default:
            nweather='happy-outline';
            ncolor = 'white';
            break;
     }
    }
    


    return (
        <>
            <View style={styles.container1}>
                <Text style={styles.date}>{date}</Text>
                <Ionicons name={nweather} size={66} color={ncolor} />
                <Text style={styles.weather}>{weather}</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.info}> {temp}℃, {city}</Text>
            </View>
        </>);
    }

    

    const styles = StyleSheet.create({
        container1:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            color:"white",
            backgroundColor:"black"
        },
        container2:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            color:"white",
            backgroundColor:"rgba(0,0,0,0.9)"
        },
        weather:{
            fontSize:40,
            color:"white",
        },
        date:{
            fontSize:40,
            paddingBottom:40,
            color:"white",
        },
        info:{
            fontSize:40,
            color:"white",
        }
    });

export default Weather;