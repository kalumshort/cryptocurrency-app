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

    renderItem({item}) {
        const handlePress = () => {
            this.props.onItemPress(item);
        }
        return (
            <View style={styles.container}>
                 <TouchableHighlight
                 onPress={handlePress}
                 style={styles.listItem}
                 >
                    <React.Fragment>
                        <Text style={styles.itemSymbol}>{item.symbol}</Text>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>${item.quotes.USD.price.toFixed(3)}</Text>
                    </React.Fragment>
                    
                </TouchableHighlight>
            </View>
            
        )
    }

    render() {
        return (
            
        
            <FlatList
                data={this.props.coins}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.renderSeperator}
                renderItem={this.renderItem}
            />
            
        );
    }
}

export default List;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        flex: 1,
    },
    listItem: {
        // backgroundColor: 'black',
        // alignItems: 'center',
        // flexDirection: 'row',
        margin: 4,
        padding: 15,
    },
    itemSymbol: {
        fontWeight: 'bold',
        // color: 'white',
        // alignSelf: 'center',
        
    },
    itemText : {
        // color: 'white',
    }
  

});

