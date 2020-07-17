import { combineReducers } from 'redux'
import games from './games'
import toastr from './toastr'

export default combineReducers({
  gamesReducer: games,
  toastrReducer: toastr,
})