import React, { Component } from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';

class ExchangeList extends Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);

    }

    static navigationOptions = {
        title: 'List',
        headerStyle: {
            backgroundColour: 'black'
        },

    }


    keyExtractor(item, index) {
        return `${index}`;
    }

    renderSeperator() {
        const style = {height: 1, backgroundColour:'black'};
        return <View style={style} />
    }

   

    renderItem({item}) {
        const handlePress = () => {
            this.props.onItemPress(item);
        }
        return (
            <View>
                 <TouchableHighlight
                 onPress={handlePress}
                 >
                    <>
                        <Text>{item.name}</Text>
                    </>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        return (
            
        
            <FlatList
                data={this.props.exchanges}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.renderSeperator}
                renderItem={this.renderItem}
            />
            
        );
    }
}

export default ExchangeList;


