import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import { createHashHistory } from 'history';

import { Provider } from 'react-redux';
import { store } from './redux';

import App from './components/app';
import Home from './containers/Home';
import Project from './containers/Project';

render((
	<Provider store={ store }>
		<Router history={ createHashHistory() }>
			<App>
				<Switch>
					<Route path="/project/:id" component={ Project } />
					<Route path="/" component={ Home } />
				</Switch>
			</App>
		</Router>
	</Provider>
), document.querySelector('#root'));

