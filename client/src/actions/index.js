import axios from 'axios';
import { login, logout, verifyToken, loadUserFromToken } from './auth';
export const FETCH_USERS = 'fetch_users';
export const FETCH_EVENTS = 'fetch_events';
export const FETCH_EVENT = 'fetch_one_event';
export const USER_LOGIN = 'fetch_login';
export const USER_LOGOUT = 'get_user_from_token';
export const USER_VERIFY = 'verify_token';
export const FETCH_BUILDINGS = 'fetch_buildings';

export const get = url => {
  return axios.get(url, {
    headers: { authorization: window.sessionStorage.getItem('jwtToken') }
  });
};

export async function fetchUsers () {
  const { data } = await get('/api/user');
  return {
    type: FETCH_USERS,
    payload: data.data
  };
}

export async function fetchEvents () {
  const { data } = await get('/api/event');
  return {
	 type: FETCH_EVENTS,
	 payload: data.data
  };
}

export async function fetchBuildings () {
  const { data } = await get('/api/building');
  return {
    type: FETCH_BUILDINGS,
    payload: data.data
  };
}

export async function fetchEvent (id) {
  const { data } = await get(`/api/event/${id}`);
  return {
    type: FETCH_EVENT,
    payload: data.data
  };
}

export { login, logout, verifyToken, loadUserFromToken };
