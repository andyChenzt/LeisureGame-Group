import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

// comnbine all reducer at here
const rootReducer = combineReducers({userReducer});

export default rootReducer;