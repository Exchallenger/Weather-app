import React,{Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function Loading(){
    return(
    <View style={styles.container}>
        <View style={styles.load}></View>
        <Text style={styles.text}>Getting Weather</Text>
    </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA"
    },
    text:{
        flex:1,
        color:"#2c2c2c",
        fontSize:30,
    },
    load:{
        
        justifyContent:"center",
        alignItems:"center",
        width:66,
        height:66,
        backgroundColor:'red',
        borderRadius:50,
    }
});