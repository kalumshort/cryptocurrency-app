import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    contactContainer: {
        padding: 20,
    },
    picture: {
        height: 200, 
        width: 200,
        marginBottom: 10,
        alignSelf: 'center',
    },
    Text: {
        fontSize: 18,
        margin: 5,
    },
    title: {
        fontWeight: 'bold',
    },
});



const NewsDetail = ({item}) => {
    const source = {uri: item.imageurl}
    return (
    <View style={ styles.contactContainer}>
        <Image source={source} style={styles.picture}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.body}</Text>
    </View>
    );



};
  export default NewsDetail;
