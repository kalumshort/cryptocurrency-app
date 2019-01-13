import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../data/actions/api.js';
import NewsArticles from '../component/NewsArticles';

class NewsScreen extends Component {
    constructor(props){
        super(props);

    }
    static navigationOptions = {
        title: 'News',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }

    componentDidMount() {
        this.props.getNews();

    }
    render() {
        return(
                <NewsArticles newsArticles={this.props.newsArticles}/>              
            
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        newsArticles: state.newsArticles,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(fetchNews());

        }
    }
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const NewsArticlesConnected = enhancer(NewsScreen);

export default NewsArticlesConnected;