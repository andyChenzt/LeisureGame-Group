import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import gameReducer from '../reducers/gameReducer';

// comnbine all reducer at here
const rootReducer = combineReducers( { userReducer, gameReducer} );

export default rootReducer;