import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../data/actions/api.js';
import List from '../component/List';

class ListScreen extends Component {
    constructor(props){
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);

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

    render() {
        return(
            <List 
            coins={this.props.coins}
            onItemPress={this.handleItemPress}
            />
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