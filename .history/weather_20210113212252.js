import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import {StyleSheet,View,Text} from 'react-native';

const Weather = (props) => {
    setTimeout(() => {
        console.log(props.data);
    }, 5000);   

    return (<View>
        <Text style={styles.container}>hi</Text>
        </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default Weather;