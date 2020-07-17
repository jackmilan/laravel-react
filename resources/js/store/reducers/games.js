import { SET_GAMES, ADD_GAME } from "../actionTypes";

const defaultState = {
  games: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload
      }
    case ADD_GAME:
      return {
        ...state,
        games: state.games.concat(action.payload)
      }
    default:
      return state
  }
}