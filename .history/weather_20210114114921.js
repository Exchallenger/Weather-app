import React, { useEffect } from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Weather = ({temp, nowweather}) => {   

    return (<View style={styles.container}>
        <Text> {temp}, {nowweather} hi</Text>
        </View>);
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