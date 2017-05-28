import React, { Component } from 'react';

import Projects from '../../components/projects';
import Issues from '../../components/issues';

import { fetchProjects } from '../../redux/modules/projects';
import { fetchIssues } from '../../redux/modules/issues';

export default class Home extends Component {
	componentWillMount() {
		const { dispatch } = this.props;

		dispatch(fetchProjects());
		dispatch(fetchIssues());
	}

	render() {
		const { projects, issues } = this.props;

		return (
			<div className="homeComponent">
				<div className="homeComponent_menu">
					<Projects data={ projects.items } />
				</div>
				<div className="homeComponent_main">
					<Issues data={ issues.items } />
				</div>
			</div>
		);
	}
}
