import React, { Component } from 'react';

export default class Projects extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className="projectsComponent">
				<h3>Projects</h3>
				<ul>
				{data.map(project => (
					<li key={ project.id }>
						<a href="#">{ project.name }</a>
					</li>
				))}
				</ul>
			</div>
		);
	}
}