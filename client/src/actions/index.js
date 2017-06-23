import axios from 'axios';
export const FETCH_USERS = 'fetch_users';
export const FETCH_LOGIN = 'fetch_login';

const getJson = async url => {
	const response = await fetch(url);
	return response.json() ;
}
export async function fetchUsers() {
	const { data } = getJson('/api/user');
	return {
		type: FETCH_USERS,
		payload: data.data.users
	};
}

export async function login (email) {
	const { data } = await axios.post(`/api/login`, { email });
	return {
		type: FETCH_LOGIN,
		payload: data
	}
}