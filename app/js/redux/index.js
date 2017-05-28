import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './modules/reducer';

function configureStore() {
	const middleware = [thunk];

	if (process.env.NODE_ENV === 'development') {
		const { logger } = require('redux-logger');
		middleware.push(logger);
	}

	return applyMiddleware(...middleware)(createStore);
}

export const store = configureStore()(reducer);