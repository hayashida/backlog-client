import React, { Component } from 'react';

export default class Project extends Component {
	render() {
		const { id } = this.props.match.params;
		return (
			<div className="projectComponent">
				{ id }
			</div>
		);
	}
}