import * as types from '../types/userTypes';

export const login = () => {
	console.log("login action");
	return {
		type: types.USER_LOGIN,
		payload: true
	}
}

export const saveUserInfo = (userInfo) => {
	console.log("update user info");
	return {
		type: types.USER_SAVEUSERINFO,
		payload: userInfo
	}
}

export const logout = () => {
	console.log("logout action");
	return {
		type: types.USER_LOGOUT,
		payload: false
	}
}

export const removeUserInfo = () => {
	console.log("remove user info");
	return {
		type: types.USER_REMOVEUSERINFO,
		payload: {}
	}
}

// need to do
export const register = () => {
	console.log("register");
}

export const fetchInfo = () => {
	console.log("fetchInfo");

}

export const updateInfo = () => {
	console.log("updateInfo");

}

export const fetchScores = () => {
	console.log("fetchScores");

}

export const changePassword = () => {
	console.log("changePassword");

}