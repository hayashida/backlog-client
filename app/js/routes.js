import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
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
					<Route exact path="/" component={ Home } />
					<Route path="/project/:id" component={ Project } />
				</Switch>
			</App>
		</Router>
	</Provider>
), document.querySelector('#root'));

