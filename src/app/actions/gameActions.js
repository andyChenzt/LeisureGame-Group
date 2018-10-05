import * as types from '../types/gameTypes';

export const startGame = () => {
	console.log("startGame action");
	return {
		type: types.GAME_STARTGAME,
		payload: false
	}
}

export const setPlayer1 = () => {
	console.log("setPlayer1 action");
	return {
		type: types.GAME_SETPLAYER1,
		payload: true
	}
}

export const setPlayer2 = () => {
	console.log("setPlayer2 action");
	return {
		type: types.GAME_SETPLAYER2,
		payload: false
	}
}

export const getQuestion = (question) => {
	console.log("getQuestion action");
	return {
		type: types.GAME_GETQUESTION,
		payload: question
	}
}