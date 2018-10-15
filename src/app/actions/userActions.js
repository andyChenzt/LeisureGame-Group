import * as types from '../types/userTypes';

export const login = () => {
	return {
		type: types.USER_LOGIN,
		payload: true
	}
}

export const saveUserInfo = (userInfo, id, token) => {
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
	return {
		type: types.USER_LOGOUT,
		payload: false
	}
}

export const removeUserInfo = () => {
	return {
		type: types.USER_REMOVEUSERINFO,
		payload: {}
	}
}

export const goChangeInfo = () => {
	return {
		type: types.USER_GOCHANGEINFO,
		payload: true
	}
}

export const backChangeInfo = () => {
	return {
		type: types.USER_BACKCHANGEINFO,
		payload: false
	}
}

export const updateInfo = (newInfo) => {
	return {
		type: types.USER_UPDATEINFO,
		payload: newInfo
	}
}

export const showAlert = (errMsg) => {
	return {
		type: types.USER_SHOWALERT,
		payload: errMsg
	}
}

export const dismissAlert = () => {
	return {
		type: types.USER_DISMISSALERT,
		payload: false
	}
}

