import React from 'react';
import PropTypes from "prop-types";
import {StyleSheet,View,Text} from 'react-native';

const Weather = () => {
    return (<View>
        <Text style={styles.container}>hi</Text>
        </View>);
}
    // Weather.PropTypes={
    //     temp:PropTypes.number.isRequired
    // }
    
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default Weather;