import React, { Component } from "react";

// importing react native components
import {StyleSheet, 
        Text, 
        View, 
        Image, 
        TouchableHighlight, 
        ScrollView 
        } 
        from 'react-native';

const styles = StyleSheet.create({
    newsDetailContainer: {
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
        <View style={ styles.newsDetailContainer}>
            <View style={styles.imageContiner}>
                <Image source={source} style={styles.picture}/> 
            </View>
            <View style={styles.newsDetailTitle}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.newsDetailBody}>
                <Text>{item.body}</Text>
            </View>
            <View>
                <TouchableHighlight>
                    <Text>Full Article</Text>
                </TouchableHighlight>
            </View>
        </View>
    );



};
  export default NewsDetail;
