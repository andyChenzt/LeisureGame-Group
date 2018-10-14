import * as types from '../types/userTypes';

export const login = () => {
	console.log("login action");
	return {
		type: types.USER_LOGIN,
		payload: true
	}
}

export const saveUserInfo = (userInfo, id, token) => {
	console.log("update user info");
	const info = {
		userInfo: userInfo,
		id: id,
		token: token
	}
	return {
		type: types.USER_SAVEUSERINFO,
		payload: info
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

export const goChangeInfo = () => {
	console.log("change info");
	return {
		type: types.USER_GOCHANGEINFO,
		payload: true
	}
}

export const backChangeInfo = () => {
	console.log("change info");
	return {
		type: types.USER_BACKCHANGEINFO,
		payload: false
	}
}

export const updateInfo = (newInfo) => {
	console.log("updateInfo");
	return {
		type: types.USER_UPDATEINFO,
		payload: newInfo
	}
}

export const showAlert = (errMsg) => {
	console.log("showAlert");
	return {
		type: types.USER_SHOWALERT,
		payload: errMsg
	}
}

export const dismissAlert = () => {
	console.log("updateInfo");
	return {
		type: types.USER_DISMISSALERT,
		payload: false
	}
}

