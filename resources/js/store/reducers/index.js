import { combineReducers } from 'redux'
import games from './modules/games'

export default combineReducers({
  gamesReducer: games
})