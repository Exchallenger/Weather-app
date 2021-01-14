import React, { useEffect } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Ionicons,Feather,FontAwesome,FontAwesome5} from '@expo/vector-icons';

const Weather = ({temp, weather, city}) => {   

    return (
        <>
        
        <View style={styles.container}>
        <Ionicons name="sunny" size={24} color="red" />
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