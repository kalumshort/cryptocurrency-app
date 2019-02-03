import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../data/actions/api.js';
import NewsArticles from '../component/NewsArticles';

class NewsScreen extends Component {
    constructor(props){
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);
    }
    
    componentDidMount() {
        this.props.getNews();
    }
   
    handleItemPress(item) {
        this.props.navigation.navigate('NewsDetail', {
            item
        });
    }
    render() {
    return(
            <>
                <NewsArticles
                    newsArticles={this.props.newsArticles}
                    onItemPress={this.handleItemPress}
                />              
            </>
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