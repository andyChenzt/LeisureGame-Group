import * as types from '../types/gameTypes';

export const startGame = () => {
	console.log("startGame action");
	return {
		type: types.GAME_STARTGAME,
		payload: false
	}
}