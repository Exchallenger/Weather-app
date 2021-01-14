import React from 'react';
import PropTypes from "prop-types";
import {StyleSheet,View,Text} from 'react-native';

const Weather = ({temp}) => {
    return (<View>
        <Text style={styles.container}>{temp}</Text>
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