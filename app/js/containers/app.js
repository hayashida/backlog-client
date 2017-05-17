import React, { Components } from 'react';

import Header from '../components/header';

export default ({ children }) => (
	<div className="wrapper">
		<Header />
		<main>
			{ children }
		</main>
	</div>
);
