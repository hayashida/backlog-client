import React from 'react';
import { connect } from 'react-redux';

import Home from '../views/home';

const mapStateToProps = (state) => {
	return {
		projects: state.projects,
		issues: state.issues
	};
}

export default connect(mapStateToProps)(Home);
