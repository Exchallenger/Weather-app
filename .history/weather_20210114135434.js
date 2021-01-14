import React, { useEffect, useRef, useState } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Ionicons,Feather,FontAwesome,FontAwesome5} from '@expo/vector-icons';
import moment from 'moment';

const Weather = ({temp, weather, city}) => {
    const [date, setDate] = useState(ndate);
    const ndate = moment().format(' h:mm \n MMMM Do dddd,');
    useEffect(()=>{
        setDate(ndate);
    })
    const iconRef = useRef();
    console.log(iconRef.name);

    return (
        <>
        
        <View style={styles.container}>
        <Text>{date}</Text>
        <Ionicons  ref={iconRef} name="sunny" size={24} color="red" />
        <FontAwesome name="sun-o" size={24} color="red" />
        <FontAwesome5 name="sun" size={24} color="red" />
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