import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator';
import store from './data/store';

const App = () => (
	<Provider store={store}>
		<AppNavigator/>
	</Provider>
);

export default App;

