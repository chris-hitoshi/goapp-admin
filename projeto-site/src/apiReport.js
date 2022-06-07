import axios from 'axios';

const apiReport = axios.create({
    baseURL: 'https://goapp-api.azurewebsites.net/reports'
});

export default apiReport;