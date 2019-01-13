import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import NewsScreen from './container/newsArticleScreen';
import NewsDetailScreen from './container/newsDetailScreen';

const RootNavigator = createStackNavigator({
    Home: NewsScreen,
    News: NewsScreen,
    NewsDetail: NewsDetailScreen
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 

});

export default createAppContainer(RootNavigator);