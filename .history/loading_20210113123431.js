import React,{Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <Text>Getting Weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
    }
});