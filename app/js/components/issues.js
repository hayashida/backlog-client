import React, { Component } from 'react';

export default class Issues extends Component {
	render() {
		const { data } = this.props;
		console.log(data);
		return  (
			<div className="issueComponent">
				<h3>Issues</h3>
				{data.map(issue => (
					<div key={ issue.id } className="issueComponent_views">
						<div className="issueComponent_views-header">
							<span className="issueComponent_views-user">{ issue.updatedUser.name }さん</span>
							が
							<span className="issueComponent_views-type">{ issue.issueType.name }</span>
							を追加
						</div>
						<div className="issueComponent_views-title">
							<a href="#">{ issue.issueKey }</a>
							<span className="issueComponent_views-summary">{ issue.summary }</span>
						</div>
						<div className="issueComponent_views-description">{ issue.description }</div>
					</div>
				))}
			</div>
		);
	}
}