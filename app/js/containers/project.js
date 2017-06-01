import React from 'react';
import { connect } from 'react-redux';

import Project from '../views/project';

const mapStateToProps = (state) => {
	return {
		projects: state.projects,
		issues: state.issues
	};
}

export default connect(mapStateToProps)(Project);