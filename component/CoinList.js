import React, { Component } from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';


class List extends Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);

    }

    keyExtractor(item, index) {
        return `${index}`;
    }

    renderSeperator() {
        const style = {height: 1, backgroundColour:'green'};
        return <View style={style} />
    }

    renderItem({ item }) {
        const handlePress = () => {
            this.props.onItemPress(item);
        }
        return (

            // Container that holds the button 
            <View style={styles.container}>

                {/* Button that holds all the coin info   */}
                <TouchableHighlight
                onPress={handlePress}
                style={styles.listItem}
                >
                    <>
                        {/* Items name and the symbol for the coin */}
                        <View style={styles.itemName}>
                            <Text style={styles.itemSymbol}>{item.symbol}</Text>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>

                        {/* The price per 1 of the coins */}
                        <View style={styles.itemPrice}>
                            <Text style={styles.itemText}>${item.quotes.USD.price.toFixed(3)}</Text>
                        </View>

                        {/* The different price changes for the different time periods */}
                        <View style={styles.itemPriceChange}>

                            {/* The change in price for the last hour */}
                            {item.quotes.USD.percent_change_1h >= 0 ? 
                            <Text style={styles.positive}>{item.quotes.USD.percent_change_1h}</Text>
                            : <Text style={styles.nagative}>{item.quotes.USD.percent_change_1h}</Text>}

                            {/* The change in price for the last 24 hours */}
                            {item.quotes.USD.percent_change_24h >= 0 ?
                            <Text style={styles.positive}>{item.quotes.USD.percent_change_24h}</Text>
                            :<Text style={styles.nagative}>{item.quotes.USD.percent_change_24h}</Text> }

                            {/* The change in price for the last 30 days  */}
                            {item.quotes.USD.percent_change_30d >= 0 ? 
                            <Text style={styles.positive}>{item.quotes.USD.percent_change_30d}</Text>
                            : <Text style={styles.nagative}>{item.quotes.USD.percent_change_30d}</Text>}

                        </View>
                    </>
                </TouchableHighlight>
                
            </View>
            
        )
    }
    render() {
        return (
            <>
                <FlatList
                    data={this.props.coins}
                    keyExtractor={this.keyExtractor}
                    ItemSeparatorComponent={this.renderSeperator}
                    renderItem={this.renderItem}
                />
            </>
            
        );
    }
}

export default List;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',
        flex: 1,
    },
    listItem: {
        backgroundColor: '#303030',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 4,
        padding: 15,
    },
    itemSymbol: {
        fontWeight: 'bold',
        color: '#f2f2f2',
        
        
    },
    itemText : {
        color: '#f2f2f2',
    },
    itemName: {
        

    },
    itemPrice: {
        alignItems: 'center',
    },
    itemPriceChange: {
        alignItems: 'center',
    },
    positive: {
        color: '#00e81e'
    },
    nagative: {
        color: '#e80000'
    },
  

});

