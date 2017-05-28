import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const storeWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
	<Provider store={storeWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
	);
registerServiceWorker();
