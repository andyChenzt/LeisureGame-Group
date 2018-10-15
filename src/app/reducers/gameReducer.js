import * as types from '../types/gameTypes';

const initState = {
	isWaiting: true,
	roomName: "",
	isGameStart: false,
	isPlayer1: true,
	hasQuestion: false,
	question: "",
};

const gameReducer = (state = initState, action) => {
	// console.log(action);
	switch (action.type) {
		case types.GAME_STARTGAME:
			return {
				...state,
				isWaiting: action.payload,
				isGameStart: action.payload,
			}
		case types.GAME_SETPLAYER1:
			return {
				...state,
				isPlayer1: action.payload,
			}
		case types.GAME_SETPLAYER2:
			return {
				...state,
				isPlayer1: action.payload,
			}
		case types.GAME_GETQUESTION:
			return {
				...state,
				hasQuestion: true,
				question: action.payload,
			}
		case types.GAME_DELETEQUESTION:
			return {
				...state,
				hasQuestion: action.payload,
			}
		case types.GAME_SETWAITING:
			return {
				...state,
				isWaiting: action.payload,
			}
		case types.GAME_SETPLAYING:
			return {
				...state,
				isWaiting: action.payload,
			}
		
		default:
			return state;
	}
	
} 

export default gameReducer;