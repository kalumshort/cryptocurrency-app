import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import ListScreen from './container/coinListScreen.js';
import NewsScreen from './container/newsArticleScreen';
import NewsDetailScreen from './container/newsDetailScreen';
import CoinDetailScreen from './container/coinDetailScreen';
import ExchangeListScreen from './container/exchangeListScreen';



const RootNavigator = createStackNavigator({
    Home: ListScreen,
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
    CoinDetail: CoinDetailScreen,
    ExchangeList: ExchangeListScreen,
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 

});

const AppDrawerNavigator = createDrawerNavigator({
    Home: RootNavigator,
    News: NewsScreen,
    List:RootNavigator,
    ExchangeList: ExchangeListScreen,
 })



export default createAppContainer( AppDrawerNavigator );

