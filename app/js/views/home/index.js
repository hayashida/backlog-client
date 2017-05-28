import React, { Component } from 'react';

import Projects from '../../components/projects';
import { fetchProjects } from '../../redux/modules/projects';

export default class Home extends Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(fetchProjects());
	}

	render() {
		const { projects } = this.props;

		return (
			<div className="homeComponent">
				<Projects data={ projects.items } />
			</div>
		);
	}
}
