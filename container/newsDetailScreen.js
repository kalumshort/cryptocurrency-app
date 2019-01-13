import React, { Component } from "react";
import NewsDetail from '../component/NewsDetail';



 class NewsDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('item').name,
      });

    render() {
        const item = this.props.navigation.getParam('item');
        return (
        <NewsDetail item={item}/>
        );
    }
  }

  export default NewsDetailScreen;