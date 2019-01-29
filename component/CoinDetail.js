import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';



const CoinDetail = ({ item }) => {
    // const source = {uri: item.imageurl}
    return (
        // Coin detail container
    <View style={ styles.coinDetailContainer}>

            {/* Top of the page that includes the name, rank and the price */}
        <View style={styles.coinTop}>
            <View style={styles.Rank}>
                <Text style={[styles.Text, styles.coinRank]}>{item.rank}</Text>
            </View>

            <View  style={styles.coinNames}>
                <Text style={[styles.Text, styles.coinName]}>{item.name}</Text>
                <Text style={[styles.Text, styles.coinSymbol]}>{item.symbol}</Text>
                <Text style={styles.itemPrice}>${item.quotes.USD.price.toFixed(3)}</Text>
            </View>
        </View>

        {/* Section that displays all of the total market data and supply */}
        <View style={styles.TotalMarketContainer}>
            <View style={styles.TotalMarketLabels}>
                <Text>Circulating Supply:</Text>
                <Text>Max Supply:</Text>
                <Text>Total Supply:</Text>
                <Text>Total Market Cap:</Text>
            </View>
            
            <View style={styles.TotalMarket}>
                <Text>{item.circulating_supply}</Text>
                <Text>{item.max_supply}</Text>
                <Text>{item.total_supply}</Text>
                <Text>{item.quotes.USD.market_cap}</Text>
            </View>
        </View>

        <View style={styles.TotalChange}>
            <View style={styles.PercentChangeContainer}>
                <View>
                    <Text>1H:</Text>
                    <Text>24H:</Text>
                    <Text>7D:</Text>
                    <Text>30D</Text>
                    <Text>1Y:</Text>
                </View>
                {/* different price changes  */}
                <View style={styles.PriceChange}>

                    {/* The change in price for the last hour */}
                    {item.quotes.USD.percent_change_1h >= 0 ? 
                    <Text style={styles.positive}>+{item.quotes.USD.percent_change_1h}%</Text>
                    : <Text style={styles.nagative}>{item.quotes.USD.percent_change_1h}%</Text>}

                    {/* The change in price for the last 24 hours */}
                    {item.quotes.USD.percent_change_24h >= 0 ?
                    <Text style={styles.positive}>+{item.quotes.USD.percent_change_24h}%</Text>
                    :<Text style={styles.nagative}>{item.quotes.USD.percent_change_24h}%</Text> }
                    
                    {/* The change in price for the last 7 days  */}
                    {item.quotes.USD.percent_change_7d >= 0 ? 
                    <Text style={styles.positive}>+{item.quotes.USD.percent_change_7d}%</Text>
                    : <Text style={styles.nagative}>{item.quotes.USD.percent_change_7d}%</Text>}

                    {/* The change in price for the last 30 days  */}
                    {item.quotes.USD.percent_change_30d >= 0 ? 
                    <Text style={styles.positive}>+{item.quotes.USD.percent_change_30d}%</Text>
                    : <Text style={styles.nagative}>{item.quotes.USD.percent_change_30d}%</Text>}
                    
                    {/* The change in price for the last year */}
                    {item.quotes.USD.percent_change_1y >= 0 ? 
                    <Text style={styles.positive}>+{item.quotes.USD.percent_change_1y}%</Text>
                    : <Text style={styles.nagative}>{item.quotes.USD.percent_change_1y}%</Text>}

                </View>
            </View>
            
            <View style={styles.ATHContainer}>
                <View>
                    <Text>ATH Price:</Text>
                    <Text>ATH Change:</Text>
                    <Text>ATH Time:</Text>
                </View>

                {/* Price surrounding the ATH */}
                <View style={styles.ATHPrice}>
                    <Text>{item.quotes.USD.ath_price}</Text>
                    {/* The change in price for the last year */}
                    {item.quotes.USD.percent_from_price_ath >= 0 ? 
                    <Text style={styles.positive}>{item.quotes.USD.percent_from_price_ath}</Text>
                    : <Text style={styles.nagative}>{item.quotes.USD.percent_from_price_ath}</Text>}

                    <Text>{item.quotes.USD.ath_date.slice(0,10)}</Text>
                    {/* <Text>{item.}</Text> */}
                </View>
            </View>

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
    coinTop: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        marginRight: 40,
        marginLeft: 20,
    },
    Rank: {
        // marginRight: 10,
        justifyContent: 'center',
    },
    coinRank: {
        fontSize: 50,
        fontWeight: 'normal',
    },
    coinNames: {
        alignItems: 'center',
    },
    coinName: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    coinSymbol: {
        fontWeight: '100',
    },
    Price:{
        justifyContent:'center',
        alignItems: 'center',
    },
    itemPrice: {
        color: '#f2f2f2',
        fontSize: 30,
        fontWeight: '100',
    },
    TotalMarketContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    TotalChange: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PercentChangeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ATHContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
