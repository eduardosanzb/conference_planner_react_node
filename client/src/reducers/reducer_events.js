import { FETCH_EVENTS, FETCH_EVENT } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_EVENTS:{
			return {...state, events: action.payload };
		}
		case FETCH_EVENT:
			return {...state, currentEvent: action.payload };
		default:
			return state;
	}
}