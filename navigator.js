import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/coinListScreen.js';
import NewsScreen from './container/newsArticleScreen';
import NewsDetailScreen from './container/newsDetailScreen';
import CoinDetailScreen from './container/coinDetailScreen';
import ExchangeListScreen from './container/exchangeListScreen';

const RootNavigator = createStackNavigator({
    Home: ExchangeListScreen,
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

export default createAppContainer(RootNavigator);