import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import NewsScreen from './container/newsArticleScreen';
import NewsDetailScreen from './container/newsDetailScreen';
import CoinDetailScreen from './container/coinDetailScreen';

const RootNavigator = createStackNavigator({
    Home: ListScreen,
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
    CoinDetail: CoinDetailScreen,

    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 

});

export default createAppContainer(RootNavigator);