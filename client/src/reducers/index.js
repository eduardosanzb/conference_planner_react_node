import { combineReducers } from 'redux';

import users from './reducer_users.js';
import events from './reducer_events.js';
import buildings from './reducer_building';
import loginData from './reducer_login';


const rootReducer = combineReducers({
  users,
  events,
  buildings,
  loginData
});

export default rootReducer;
