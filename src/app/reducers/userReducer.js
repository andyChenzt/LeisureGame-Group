
// import userReducer from './userReducer';
import * as types from '../types/userTypes';

const initState = {
	isLogin: false,
	isRegister: false,
	user: {}
};

const userReducer = (state = initState, action) => {
	// console.log(action);
	switch (action.type) {
		case types.USER_LOGIN:
			console.log("reducer login");
			return {
				...state,
				isLogin: action.payload	//true // 
			}
		case types.USER_LOGOUT:
			console.log("reducer logout");
			return {
				...state,
				isLogin: false // action.payload
			}
		case types.USER_SAVEUSERINFO:
			console.log("reducer getUserInfo");
			console.log(action.payload);
			return {
				...state,
				user: action.payload
			}
		case types.USER_REMOVEUSERINFO:
			console.log("reducer removeUserInfo");
			console.log(action.payload);
			return {
				...state,
				user: action.payload
			}
		default:
			return state;
	}
	
} 

export default userReducer;