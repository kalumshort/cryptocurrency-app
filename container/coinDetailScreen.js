import React, { Component } from "react";
import CoinDetail from '../component/CoinDetail';



 class CoinDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('item').name,
        headerStyle:{
          backgroundColor: '#303030',
      },
      headerTitleStyle:{ 
          color: '#f2f2f2'
      },
      });

    render() {
        const item = this.props.navigation.getParam('item');
        return (
        <CoinDetail item={item}/>
        );
    }
  }

  export default CoinDetailScreen;