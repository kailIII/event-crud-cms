import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import scheduledEvents from './scheduledEvents';

// main reducers
export const reducers = combineReducers({
	routing: routerReducer,
	form: formReducer.plugin({
		'event-edit': (state, action) => {
			// reset form (wipe state) when navigating away from the Edit Event page
			switch (action.type) {
				case '@@router/LOCATION_CHANGE':
					return undefined;
				default:
					return state;
			}
		},
	}),
	scheduledEvents,
});
