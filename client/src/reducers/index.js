import { combineReducers } from 'redux';

import users from './reducer_users.js'
import loginData from './reducer_login';


const rootReducer = combineReducers({
	users,
	loginData
});

export default rootReducer;