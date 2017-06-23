import axios from 'axios';
import { USER_LOGIN, USER_LOGOUT, get } from './index';

export async function login ({ email, password }) {
	const { data } = await axios.post('/api/login', { email, password });
	return {
		type: USER_LOGIN,
		payload: data
	}
}

export function logout() {
	return {
		type: USER_LOGOUT,
		payload: null
	};
}

export async function verifyToken ({ token }) {
	const { data } = await axios.get('api/auth/verifyToken', {
		params: {
			token
		}
	});
	return {
		type: data.success ? USER_LOGIN : USER_LOGOUT,
		payload: data
	}
}

export function loadUserFromToken () {
	const token = window.sessionStorage.getItem('jwtToken');
	if (!token || token === '') {
		return {
			type: USER_LOGOUT,
			payload: null
		}
	} else {
		return verifyToken({ token });
	}
}