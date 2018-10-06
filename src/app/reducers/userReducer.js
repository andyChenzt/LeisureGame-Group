
// import userReducer from './userReducer';
import * as types from '../types/userTypes';

const initState = {
	isLogin: false,
	isRegister: false,
	user: {},
	id: "",
	token: "",
	isChangeInfo: false
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
				user: action.payload.userInfo,
				id: action.payload.id
			}
		case types.USER_REMOVEUSERINFO:
			console.log("reducer removeUserInfo");
			console.log(action.payload);
			return {
				...state,
				user: action.payload
			}
		case types.USER_GOCHANGEINFO:
			console.log("reducer chagne info");
			console.log(action.payload);
			return {
				...state,
				isChangeInfo: action.payload
			}
		case types.USER_BACKCHANGEINFO:
			console.log("reducer back info");
			console.log(action.payload);
			return {
				...state,
				isChangeInfo: action.payload
			}
		case types.USER_UPDATEINFO:
			console.log("reducer update info");
			console.log(action.payload);
			return {
				...state,
				user: {
					...state.user,
					email: action.payload.email,
					nickName: action.payload.nickName,
					firstName: action.payload.firstName,
					lastName: action.payload.lastName
				}
				
			}
		default:
			return state;
	}
	
} 

export default userReducer;