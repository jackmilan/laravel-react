import axios from 'axios';

class Manager {
    constructor() {
        this.baseURL = '/api/v1/ratings';
    }

    getRatings() {
        return axios.get(`${this.baseURL}/`);
    }
}

export default new Manager();