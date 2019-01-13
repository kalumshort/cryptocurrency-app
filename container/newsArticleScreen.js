import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../data/actions/api.js';
import NewsArticles from './components/News.js';

class NewsArticles extends Component {
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
                <NewsArticles/>              
            
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
const NewsArticlesConnected = enhancer(NewsArticles);

export default NewsArticlesConnected;