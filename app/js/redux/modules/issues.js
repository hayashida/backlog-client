const FETCH_ISSUES = 'issues/FETCH_ISSUES';

const initialState = {
	items: []
};

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case FETCH_ISSUES:
			return Object.assign({}, state, { items: action.items });
		default:
			return state;
	}
}

import request from 'superagent';
import BacklogConfig from '../../config/backlog';

export function fetchIssues(projectId = null) {
	return dispatch => {
		request.get(`https://${BacklogConfig.space}.backlog.jp/api/v2/issues?apiKey=${BacklogConfig.apiKey}`)
			.end((err, res) => {
				let items = res.body.map(data => {
					return data;
				});
				dispatch({
					type: FETCH_ISSUES,
					items: items
				});
			});
	}
}