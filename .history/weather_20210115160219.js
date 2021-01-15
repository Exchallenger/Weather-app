import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Text, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
            var grad = ['#f12711', '#f5af19'];
            break;
        case 'Rain':
            nweather = 'rainy';
            ncolor = 'blue';
            grad=['#005aa7', '#fffde4'];
            break;
        case 'Snow':
            nweather = 'snow';
            ncolor = 'white';
            grad=['#ada996','#f2f2f2','#dbdbdb', '#eaeaea'];
            break;
        case 'Clouds':
            nweather = 'cloudy';
            ncolor = 'grey';
            grad = ['#e6dada','#274046'];
            break;
        default:
            nweather='happy-outline';
            ncolor = 'white';
            grad = ['#77a1d3','#79cbca','#e684ae'];
            break;
     }
    }
    


    return (
        <LinearGradient  style={styles.container} colors={grad}>
            <View style={styles.container1}>
                <Text style={styles.date}>{date}</Text>
                <Ionicons style={styles.icon} name={nweather} size={66} color={ncolor} />
                <Text style={styles.weather}>{weather}</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.info}> {temp}℃, {city}</Text>
            </View>
        </LinearGradient>);
    }

    

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
        },
        container1:{
            flex:2,
            justifyContent:"center",
            alignItems:"center",
            color:"white",
        },
        container2:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            color:"white",
            marginBottom:40,
            paddingBottom:40,
        },
        icon:{
            padding:40,
        },
        weather:{
            fontSize:40,
            color:"white",
        },
        date:{
            fontSize:40,
            color:"white",
        },
        info:{
            fontSize:40,
            color:"white",
        }

    });

export default Weather;