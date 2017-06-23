import { USER_LOGIN, USER_LOGOUT } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case USER_LOGIN:{
			const { success, token, data } = action.payload;
			if (success) {
				window.sessionStorage.setItem('jwtToken', token);
			}
			return {...state, loggedIn: success, user: data };
		}
		case USER_LOGOUT: {
			window.sessionStorage.removeItem('jwtToken');
			return { ...state, loggedIn: false, user: null }
		}
		default:
			return state;
	}
}