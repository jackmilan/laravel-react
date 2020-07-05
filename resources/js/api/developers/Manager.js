import axios from 'axios';

class Manager {
    constructor() {
        this.baseURL = '/api/v1/developers';
    }

    getDevelopers() {
        return axios.get(`${this.baseURL}/`);
    }
}

export default new Manager();