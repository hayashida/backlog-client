import React from 'react';
import { connect } from 'react-redux';

import Project from '../views/project';

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(Project);