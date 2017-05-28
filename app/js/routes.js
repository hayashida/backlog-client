import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import { Provider } from 'react-redux';
import { store } from './redux';

import App from './components/app';
import Home from './containers/Home';

render((
	<Provider store={ store }>
		<Router history={ createHashHistory() }>
			<App>
				<Route path="/" component={ Home } />
			</App>
		</Router>
	</Provider>
), document.querySelector('#root'));

