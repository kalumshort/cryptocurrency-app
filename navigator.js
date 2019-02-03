//import react
import React from 'react';

// importing the needed navigation packages
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

// importing the needed react native packages
import {
    Platform,
    Dimensions,
} from 'react-native';

// importing 
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
//////////////////////////////////////////////////////////
// Setting the headers of the stacks created for the drawer

// setting the header bar of the news stack to include the
//  button that opens the drawer
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

const navigationOptionsCoins = ({ navigation }) => {
    return {
        headerRight: (
            <MenuButton
                onPress={() => navigation.toggleDrawer()}
            />
        ),
        title: 'Coins',
        headerStyle: {
            backgroundColor: '#303030',
        },
    }
}
//////////////////////////////////////////////////////////////
// creating the stacks for the drawer navigator

// The stack that holds the list of the coins and the detail page for each coin
const CoinListStack = createStackNavigator(
    {
        List:{
            screen: ListScreen,
        },
        CoinDetail: {
            screen: CoinDetailScreen,
        },    
    },
    {
        defaultNavigationOptions: navigationOptionsCoins,
    }
);
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
////////////////////////////////////////////////////////////
// making the drawer navigator 

// The drawer that holds the stacks and other screens for the app
const DrawerNavigator = createDrawerNavigator(
    {
    News: NewsListStack,
    Coins: CoinListStack,

    },
    DrawerConfig
);

export default createAppContainer( DrawerNavigator );

