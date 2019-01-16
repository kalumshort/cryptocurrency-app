import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../data/actions/api.js';
import List from '../component/CoinList';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';



class ListScreen extends Component {
    constructor(props){
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.handleNewsPress = this.handleNewsPress.bind(this);

    }
    static navigationOptions = {
        title: 'Coins',
        headerStyle:{
            backgroundColor: 'lightblue'
        }
    }

    componentDidMount() {
        this.props.getCoins();

    }

    handleItemPress(item) {
        this.props.navigation.navigate('CoinDetail', {
            item
        });
    }

    handleNewsPress() {
        this.props.navigation.navigate('News');
    }

    render() {
        return(
            <>
                {/* <TouchableHighlight 
                onPress={this.handleNewsPress}
                style={styles.news}
                >
                    <Text>News</Text>
                </TouchableHighlight> */}
                <List 
                coins={this.props.coins}
                onItemPress={this.handleItemPress}
                />
                </>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        coins: state.coins,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCoins: () => {
            dispatch(fetchCoins());

        }
    }
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const ListScreenConnected = enhancer(ListScreen);

export default ListScreenConnected;

const styles = StyleSheet.create({
  news: {
      margin: 21,
  }
});