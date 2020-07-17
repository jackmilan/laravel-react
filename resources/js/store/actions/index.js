import { SET_GAMES, ADD_GAME } from '../actionTypes';

export function setGames(payload) {
    return { type: SET_GAMES, payload }
};

export function addGame(payload) {
    return { type: ADD_GAME, payload }
};