import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';



const CoinDetail = ({ item }) => {
    // const source = {uri: item.imageurl}
    return (
    <View style={ styles.coinDetailContainer}>
        <View style={styles.coinNames}>
            <Text style={[styles.Text, styles.coinName]}>{item.name}</Text>
            <Text style={[styles.Text, styles.coinSymbol]}>{item.symbol}</Text>
            <Text style={[styles.Text, styles.coinRank]}>{item.rank}</Text>
        </View>
        <View style={styles.TotalMarket}>
            <Text>{item.circulating_supply}</Text>
            <Text>{item.max_supply}</Text>
            <Text>{item.total_supply}</Text>
            <Text>{item.quotes.USD.market_cap}</Text>
        </View>
        <View style={styles.PriceChange}>
            <Text>{item.quotes.USD.percent_change_1h}</Text>
            <Text>{item.quotes.USD.percent_change_24h}</Text>
            <Text>{item.quotes.USD.percent_change_7d}</Text>
            <Text>{item.quotes.USD.percent_change_30d}</Text>
            <Text>{item.quotes.USD.percent_change_1y}</Text>
        </View>
        <View style={styles.ATHPrice}>
            <Text>{item.quotes.USD.ath_price}</Text>
            <Text>{item.quotes.USD.percent_from_price_ath}</Text>
            <Text>{item.quotes.USD.ath_date}</Text>
            {/* <Text>{item.}</Text> */}
        </View>
    </View>
    );



};
  export default CoinDetail;

  const styles = StyleSheet.create({
    coinDetailContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#303030',
    },
    picture: {
        height: 200, 
        width: 200,
        marginBottom: 10,
        alignSelf: 'center',
    },
    Text: {
        color: '#f2f2f2',
        fontSize: 18,
        margin: 5,
    },
    title: {
        fontWeight: 'bold',
    },
});
