import * as types from '../types/gameTypes';

const initState = {
	isWaiting: true,
	roomNmae: "",
	isGameStart: false,
};

const gameReducer = (state = initState, action) => {
	// console.log(action);
	switch (action.type) {
		case types.GAME_STARTGAME:
			console.log("reducer GAME_STARTGAME");
			return {
				...state,
				isWaiting: action.payload,
				isGameStart: action.payload
			}
		
		default:
			return state;
	}
	
} 

export default gameReducer;