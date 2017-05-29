import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className="projectsComponent">
				<h3>Projects</h3>
				<ul>
				{data.map(project => (
					<li key={ project.id }>
						<Link to={ `/project/${ project.id }` }>{ project.name }</Link>
					</li>
				))}
				</ul>
			</div>
		);
	}
}