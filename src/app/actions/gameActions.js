import * as types from '../types/gameTypes';

export const startGame = () => {
	return {
		type: types.GAME_STARTGAME,
		payload: false
	}
}

export const setPlayer1 = () => {
	return {
		type: types.GAME_SETPLAYER1,
		payload: true
	}
}

export const setPlayer2 = () => {
	return {
		type: types.GAME_SETPLAYER2,
		payload: false
	}
}

export const getQuestion = (question) => {
	return {
		type: types.GAME_GETQUESTION,
		payload: question
	}
}

export const deleteQuestion = (question) => {
	return {
		type: types.GAME_DELETEQUESTION,
		payload: false	
	}
}

export const setWaiting = () => {
	return {
		type: types.GAME_SETWAITING,
		payload: true
	}
}

export const setPlaying = () => {
	return {
		type: types.GAME_SETPLAYING,
		payload: false
	}
}