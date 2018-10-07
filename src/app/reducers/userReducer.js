
// import userReducer from './userReducer';
import * as types from '../types/userTypes';

const initState = {
	isLogin: false,
	isRegister: false,
	user: {},
	id: "",
	token: "",
	isChangeInfo: false,
	isError: false,
	// loginFailedMsg: "Wrong email or password.",
	errorMsg: ""
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
			return initState;
			
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
		case types.USER_SHOWALERT:
			console.log("reducer show alert");
			console.log(action.payload);
			return {
				...state,
				isError: true,
				errorMsg: action.payload
			}
		case types.USER_DISMISSALERT:
			console.log("reducer dismiss alert");
			console.log(action.payload);
			return {
				...state,
				isError: action.payload
			}
		default:
			return state;
	}
	
} 

export default userReducer;