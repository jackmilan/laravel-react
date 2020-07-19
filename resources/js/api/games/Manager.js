import axios from 'axios';

class Manager {
    constructor() {
        this.baseURL = '/api/v1/games';
    }

    getGames() {
        return axios.get(`${this.baseURL}/`);
    }

    createGame(data) {
        return axios.post(`${this.baseURL}/create`, data);
    }

    deleteGame(id) {
        return axios.delete(`${this.baseURL}/${id}`);
    }
}

export default new Manager();