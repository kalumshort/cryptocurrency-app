import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins, fetchExchanges } from '../data/actions/api.js';
import ExchangeList from '../component/ExchangeList';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';



class ExchangeListScreen extends Component {
    constructor(props){
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.handleNewsPress = this.handleNewsPress.bind(this);

    }
    static navigationOptions = {
        title: 'Exchanges',
        headerStyle:{
            backgroundColor: 'lightblue'
        }
    }

    componentDidMount() {
        this.props.getExchanges();

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
            <ExchangeList
                exchanges={this.props.exchanges}
            />
                
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        exchanges: state.exchanges,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getExchanges: () => {
            dispatch(fetchExchanges());

        }
    }
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const ExchangeListScreenConnected = enhancer(ExchangeListScreen);

export default ExchangeListScreenConnected;

const styles = StyleSheet.create({
  news: {
      margin: 21,
  }
});