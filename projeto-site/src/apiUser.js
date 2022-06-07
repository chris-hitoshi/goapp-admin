import axios from 'axios';

const apiUser = axios.create({
    baseURL: 'https://goapp-api.azurewebsites.net/users'
});

export default apiUser;