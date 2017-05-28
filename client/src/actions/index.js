export const FETCH_USERS = 'fetch_users';


export async function fetchUsers() {
	const response = await fetch('/api');
	const { users } = await response.json();
	return {
		type: FETCH_USERS,
		payload: users
	};
}