import axios from 'axios';

class Manager {
    constructor() {
        this.baseURL = '/api/v1/games';
    }

    getGames() {
        return axios.get(`${this.baseURL}/`);
    }

    getGame(id) {
        return axios.get(`${this.baseURL}/${id}`);
    }

    createGame(data) {
        return axios.post(`${this.baseURL}/`, data);
    }

    editGame(data, id) {
        return axios.put(`${this.baseURL}/${id}`, data);
    }

    deleteGame(id) {
        return axios.delete(`${this.baseURL}/${id}`);
    }
}

export default new Manager();