import React, { Component } from 'react';

import Header from './header';

export default ({ children }) => (
	<div className="wrapper">
		<Header />
		<main id="mainComponent">
			{ children }
		</main>
	</div>
);