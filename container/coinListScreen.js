import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../data/actions/api.js';
import List from '../component/CoinList';
import {Text, TouchableHighlight} from 'react-native';






class ListScreen extends Component {
    constructor(props){
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.handleNewsPress = this.handleNewsPress.bind(this);

    }
    static navigationOptions = {
        title: 'Coins',
        headerStyle:{
            backgroundColor: '#303030',
        },
        headerTitleStyle:{ 
            color: '#f2f2f2'
        },
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
        this.props.navigation.toggleDrawer();
    }

    render() {
        return(
            <>
                {/* <TouchableHighlight>
                    <Text onPress={this.handleNewsPress}>drawer</Text>
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

