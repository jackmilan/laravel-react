import { SET_GAMES } from "../../actionTypes";

const defaultState = {
    games: []
}

export default(state = defaultState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload
      }
    default:
      return state
  }
}