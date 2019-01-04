import React, { Component } from 'react';
import {View, Text, TouchableHighlight, FlatList } from 'react-native';

class List extends Component {
    constructor(props){
        super(props);

    }

    static navigationOptions = {
        title: 'List',

    }


    keyExtractor(item) {
        return item.id;
    }

    renderSeperator(item) {
        const style = {height: 1, backgroundColour:'black'};
        return <View style={style} />
    }

    renderItem({item}) {
        const handlePress = () => {
            this.props.onItemPress(item);
        }
        return (
            <View>
                <TouchableHighlight>
                    <Text>{item.name}</Text>
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