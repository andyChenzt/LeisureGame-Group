
// import userReducer from './userReducer';
import * as types from '../types/loginTypes';

const initState = {
	isLogin: false,
	
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
		
		default:
			return state;
	}
	
} 

export default userReducer;