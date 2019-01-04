import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

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