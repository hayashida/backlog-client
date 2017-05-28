import React from 'react';
import { connect } from 'react-redux';

import Home from '../views/home';

const mapStateToProps = (state) => {
	return {
		projects: state.projects
	};
}

export default connect(mapStateToProps)(Home);
