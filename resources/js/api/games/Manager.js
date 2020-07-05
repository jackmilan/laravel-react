import axios from 'axios';

class Manager {
    constructor() {
        this.baseURL = '/api/v1/games';
    }

    getGames() {
        return axios.get(`${this.baseURL}/`);
    }
}

export default new Manager();