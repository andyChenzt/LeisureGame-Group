import * as types from '../types/userTypes';

const initState = {
	isLogin: false,
	isRegister: false,
	user: {},
	id: "",
	token: "",
	isChangeInfo: false,
	isError: false,
	errorMsg: ""
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case types.USER_LOGIN:
			return {
				...state,
				isLogin: action.payload	
			}
		case types.USER_LOGOUT:
			return initState;
			
		case types.USER_SAVEUSERINFO:
			return {
				...state,
				user: action.payload.userInfo,
				id: action.payload.id
			}
		case types.USER_REMOVEUSERINFO:
			return {
				...state,
				user: action.payload
			}
		case types.USER_GOCHANGEINFO:
			return {
				...state,
				isChangeInfo: action.payload
			}
		case types.USER_BACKCHANGEINFO:
			return {
				...state,
				isChangeInfo: action.payload
			}
		case types.USER_UPDATEINFO:
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
			return {
				...state,
				isError: true,
				errorMsg: action.payload
			}
		case types.USER_DISMISSALERT:
			return {
				...state,
				isError: action.payload
			}
		default:
			return state;
	}
	
} 

export default userReducer;