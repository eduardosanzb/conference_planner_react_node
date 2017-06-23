import axios from 'axios';
export const FETCH_USERS = 'fetch_users';
export const USER_LOGIN = 'fetch_login';
export const USER_LOGOUT = 'get_user_from_token';
export const USER_VERIFY = 'verify_token'

const get = url => {
	return axios.get(url, {
		headers: { authorization: window.sessionStorage.getItem('jwtToken')}
	});
}

export async function fetchUsers() {
	const { data } = await get('/api/user');
	return {
		type: FETCH_USERS,
		payload: data.data
	};
}

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