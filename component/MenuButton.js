// import React, {Component } from 'react';

// export default class MenuButton extends React.Component{
//     render(){
//         return(
//             <Ionicons
//                 name="md-menu"
//                 color='black'
//                 size={32}
//                 style={StyleSheet.menuIcon}
//             />
//         )
//     }
// }




import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { fetchCoins } from '../data/actions/api.js';








class MenuButton extends Component {
    constructor(props){
        super(props);
        this.handleDrawerPress = this.handleDrawerPress.bind(this);

    }
    
    componentDidMount() {
        this.props.getCoins();

    }

    handleItemPress(item) {
        this.props.navigation.navigate('CoinDetail', {
            item
        });
    }


    handleDrawerPress() {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return(
            <>
                  <Ionicons
                name="md-menu"
                color='white'
                size={32}
                style={StyleSheet.menuIcon}
                onPress={this.handleDrawerPress}
            />
                
            </>
        )
    }
}

const styles = StyleSheet.create({
    menuIcon:{

    }
})

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
const MenuButtonConnected = enhancer(MenuButton);

export default MenuButtonConnected;

