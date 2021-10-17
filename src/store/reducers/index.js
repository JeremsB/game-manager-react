import { combineReducers } from 'redux'
import gameReducer from './gamesReducer'

export default combineReducers({
    games: gameReducer
})
