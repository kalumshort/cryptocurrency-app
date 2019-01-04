import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';

const RootNavigator = createStackNavigator({
    Home: ListScreen,
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'green'
    } 

});

export default createAppContainer(RootNavigator);