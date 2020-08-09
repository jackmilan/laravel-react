import { SET_GAMES, ADD_GAME, UPDATE_GAME, DELETE_GAME } from "../actionTypes";

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
    case UPDATE_GAME:
      return {
        ...state,
        games: state.games.map(g => {
          if (+g.id === +action.payload.id) {
            return {
              ...g,
              title: action.payload.title,
              description: action.payload.description,
              developer_id: action.payload.developer_id,
              rating_id: action.payload.rating_id,
              release_date: action.payload.release_date,
            }
          }

          return g;
        })
      }
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(game => +game.id !== +action.payload)
      }

    default:
      return state
  }
}