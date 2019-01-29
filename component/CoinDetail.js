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

        {/* different price changes  */}
        <View style={styles.PriceChange}>

             {/* The change in price for the last hour */}
             {item.quotes.USD.percent_change_1h >= 0 ? 
            <Text style={styles.positive}>{item.quotes.USD.percent_change_1h}</Text>
            : <Text style={styles.nagative}>{item.quotes.USD.percent_change_1h}</Text>}

            {/* The change in price for the last 24 hours */}
            {item.quotes.USD.percent_change_24h >= 0 ?
            <Text style={styles.positive}>{item.quotes.USD.percent_change_24h}</Text>
            :<Text style={styles.nagative}>{item.quotes.USD.percent_change_24h}</Text> }
            
             {/* The change in price for the last 7 days  */}
             {item.quotes.USD.percent_change_7d >= 0 ? 
            <Text style={styles.positive}>{item.quotes.USD.percent_change_7d}</Text>
            : <Text style={styles.nagative}>{item.quotes.USD.percent_change_7d}</Text>}

            {/* The change in price for the last 30 days  */}
            {item.quotes.USD.percent_change_30d >= 0 ? 
            <Text style={styles.positive}>{item.quotes.USD.percent_change_30d}</Text>
            : <Text style={styles.nagative}>{item.quotes.USD.percent_change_30d}</Text>}
            
            {/* The change in price for the last year */}
            {item.quotes.USD.percent_change_1y >= 0 ? 
            <Text style={styles.positive}>{item.quotes.USD.percent_change_1y}</Text>
            : <Text style={styles.nagative}>{item.quotes.USD.percent_change_1y}</Text>}

        </View>
        
        {/* Price surrounding the ATH */}
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
    positive: {
        color: '#00e81e'
    },
    nagative: {
        color: '#e80000'
    },
});
