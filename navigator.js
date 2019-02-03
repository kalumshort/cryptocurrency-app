import React from 'react';

import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import {
    Platform,
    Dimensions,
} from 'react-native';

import ListScreen from './container/coinListScreen.js';
import NewsScreen from './container/newsArticleScreen';
import NewsDetailScreen from './container/newsDetailScreen';
import CoinDetailScreen from './container/coinDetailScreen';
import ExchangeListScreen from './container/exchangeListScreen';

import MenuButton from './component/MenuButton';

// finding the dimensions of the screen and setting how much the drawer takes up
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.75,
}
// setting the 
const navigationOptionsNews = ({ navigation }) => {
    return {
        headerRight: (
            <MenuButton
                onPress={() => navigation.toggleDrawer()}
            />
        ),
        title: 'News',
        headerStyle:{
            backgroundColor: '#303030',
        },
    }
}

// The stack that holds the list of the coins and the detail page for each coin
const CoinListStack = createStackNavigator({
    List: ListScreen,
    CoinDetail: CoinDetailScreen
});
// The stack that holds the news articles and the detail page for them
const NewsListStack = createStackNavigator(
    {
        News: {
        screen: NewsScreen,
        },
        NewsDetail: {
        screen: NewsDetailScreen,
        },
    },
    {
        defaultNavigationOptions: navigationOptionsNews,
        initialRouteName: 'News',
    },
 );
// The drawer that holds the stacks and other screens for the app
const DrawerNavigator = createDrawerNavigator(
    {
    News: NewsListStack,
    Coins: CoinListStack,

    },
    DrawerConfig
);

export default createAppContainer( DrawerNavigator );

