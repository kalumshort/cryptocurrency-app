import React, { Component } from "react";
import CoinDetail from '../component/CoinDetail';



 class CoinDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('item').name,
      });

    render() {
        const item = this.props.navigation.getParam('item');
        return (
        <CoinDetail item={item}/>
        );
    }
  }

  export default CoinDetailScreen;