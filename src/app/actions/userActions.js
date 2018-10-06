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