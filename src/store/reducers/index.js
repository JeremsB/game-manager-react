import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import categoriesReducer from "./categoriesReducer";
import consolesReducer from "./consolesReducer";

export default combineReducers({
    games: gamesReducer,
    categories: categoriesReducer,
    consoles: consolesReducer
})
