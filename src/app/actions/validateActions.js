import * as types from '../types/loginTypes';

export const login = () => {
	console.log("login action");
	return {
		type: types.USER_LOGIN,
		payload: true
	}
}

export const logout = () => {
	console.log("logout action");
	return {
		type: types.USER_LOGOUT,
		payload: false
	}
}