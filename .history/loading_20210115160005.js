import React from 'react';
import {StyleSheet, Text, View, StatusBar, Animated} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return(
    <LinearGradient colors={['#4568dc','#b06ab3']} style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.load}></View>
        <View style={styles.texts}><Text style={styles.text}>Getting Weather...</Text></View>
    </LinearGradient>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA"
    },
    texts:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        marginBottom:120
    },
    text:{
        color:"white",
        fontSize:30,
    },
    load:{
        position:"absolute",
        top:350,
        height:66,
        width:66,
        borderWidth:3,
        borderTopColor:"white",
        borderRadius:50,
    }
});