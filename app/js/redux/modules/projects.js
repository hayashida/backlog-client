const FETCH_PROJECTS = 'projects/FETCH_PROJECTS';

const initialState = {
	items: []
};

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case FETCH_PROJECTS:
			return Object.assign({}, state, { items: action.items });
		default:
			return state;
	}
}

import request from 'superagent';
import BacklogConfig from '../../config/backlog';

export function fetchProjects() {
	return dispatch => {
		request.get(`https://${BacklogConfig.space}.backlog.jp/api/v2/projects`)
			.query({
				apiKey: BacklogConfig.apiKey
			})
			.end((err, res) => {
				let items = res.body.map(data => {
					return {
						id: data.id,
						name: data.name,
						projectKey: data.projectKey
					};
				});
				dispatch({
					type: FETCH_PROJECTS,
					items: items
				});
			});
	}
}