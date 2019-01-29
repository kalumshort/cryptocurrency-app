import React , { Component } from 'react';

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
import Test from './screens/Test';

import MenuButton from './component/MenuButton';

const WIDTH = Dimensions.get('window').width;


const DrawerConfig = {
    drawerWidth: WIDTH*0.75,
}

// const AppDrawerNavigator = createDrawerNavigator(
//     {
//     // Home: RootNavigator,
//     List: ListScreen,
//     News: NewsScreen,
//     ExchangeList: ExchangeListScreen,
//     },
//     DrawerConfig
// );

// const RootNavigator = createStackNavigator({
//     // Drawer: AppDrawerNavigator,

//     Home: ListScreen,
//     News: NewsScreen,
//     NewsDetail: NewsDetailScreen,
//     CoinDetail: CoinDetailScreen,
//     ExchangeList: ExchangeListScreen,

// },
// {
//     defaultNavigationOptions: {
//         title: 'test',
//         headerStyle: {
//             backgroundColor: '#303030'
//         },
//         headerTintColor: 'white',
//         // headerLeft: <MenuButton/>

//     } 
// });

// The stack that holds the list of the coins and the detail page for each coin
const CoinListStack = createStackNavigator({
    List: ListScreen,
    CoinDetail: CoinDetailScreen
});
// The stack that holds the news articles and the detail page for them
const NewsListStack = createStackNavigator({
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
});
// The drawer that holds the stacks and other screens for the app
const DrawerNavigator = createDrawerNavigator(
    {
    Coins: CoinListStack,
    News: NewsListStack,
    },
    DrawerConfig
);

export default createAppContainer( DrawerNavigator );

