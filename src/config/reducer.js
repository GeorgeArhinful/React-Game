import {combineReducers} from 'redux';
import {playerReducer} from './../reducers/index.js';


export const mainReducer = combineReducers({
    player:playerReducer
});
