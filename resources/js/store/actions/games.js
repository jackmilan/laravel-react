import { SET_GAMES, ADD_GAME, UPDATE_GAME, DELETE_GAME } from '../actionTypes';

export function setGames(payload) {
    return { type: SET_GAMES, payload }
};

export function addGame(payload) {
    return { type: ADD_GAME, payload }
};

export function updateGame(payload) {
    return { type: UPDATE_GAME, payload }
}

export function deleteGame(payload) {
    return { type: DELETE_GAME, payload };
}