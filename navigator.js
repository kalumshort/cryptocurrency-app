import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import NewsScreen from './container/newsArticleScreen';

const RootNavigator = createStackNavigator({
    Home: NewsScreen,
    News: NewsScreen,
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 

});

export default createAppContainer(RootNavigator);