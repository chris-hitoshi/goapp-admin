import axios from 'axios';

const apiContest = axios.create({
    baseURL: 'https://goapp-api.azurewebsites.net/contestations'
});

export default apiContest;