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
});



const NewsDetail = ({item}) => {
    // const source = {uri: item.picture}
    return (
    <View style={ styles.contactContainer}>
        <Text>{item.title}</Text>
    </View>
    );



};
  export default NewsDetail;
