
// import userReducer from './userReducer';
import * as types from '../types/userTypes';

const initState = {
	isLogin: false,
	user: {name: "11"}
};

const userReducer = (state = initState, action) => {
	// console.log(action);
	switch (action.type) {
		case types.USER_LOGIN:
			console.log("call login");
			return {
				...state,
				isLogin: action.payload	//true // 
			}
		case types.USER_LOGOUT:
			console.log("call logout");
			return {
				...state,
				isLogin: false // action.payload
			}
		case types.USER_SAVEUSERINFO:
			console.log("call getUserInfo");
			console.log(action.payload);
			return {
				...state,
				user: action.payload
			}
		case types.USER_REMOVEUSERINFO:
			console.log("call removeUserInfo");
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