import { combineReducers } from 'redux';

import users from './reducer_users.js'
import events from './reducer_events.js'
import loginData from './reducer_login';


const rootReducer = combineReducers({
	users,
	events,
	loginData
});

export default rootReducer;