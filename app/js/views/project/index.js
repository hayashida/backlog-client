import React, { Component } from 'react';

import Projects from '../../components/projects';
import Issues from '../../components/issues';

import { fetchProjects } from '../../redux/modules/projects';
import { fetchIssues } from '../../redux/modules/issues';

export default class Project extends Component {
	projectId = 0;

	componentWillMount() {
		const { dispatch, match } = this.props;
		const { id } = match.params;
		this.projectId = id;

		dispatch(fetchProjects());
		dispatch(fetchIssues(this.projectId));
	}

	render() {
		const { projects, issues } = this.props;

		return (
			<div className="projectComponent">
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