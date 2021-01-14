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
            nweather='cog';
            ncolor = 'grey';
            break;
     }
    }
    


    return (
        <View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.date}>{date}</Text>
            <Ionicons name={nweather} size={66} color={ncolor} />
            <Text>{weather}</Text>
        </View>
        <View style={styles.container2}>
            <Text> {temp}℃, {city}</Text>
        </View>
        </View>);
    }

    

    const styles = StyleSheet.create({
        container:{
            fontSize:40,
        },
        container1:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            color:"black",
            backgroundColor:"yellow"
        },
        container2:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            color:"black",
            backgroundColor:"blue"
        },
        date:{
            fontSize:40,
            paddingBottom:20,
        }
    });

export default Weather;