import React, { useEffect } from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Weather = ({temp},{weather}) => {   

    return (<View>
        <Text style={styles.container}>{temp, weather}</Text>
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