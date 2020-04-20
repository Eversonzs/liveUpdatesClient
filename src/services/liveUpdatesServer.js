import axios from 'axios';

const liveUpdatesServer = axios.create({
    baseURL: process.env.REACT_APP_LIVE_UPDATES_SERVER,
    auth: {
        username: process.env.REACT_APP_SERVER_USERNAME,
        password: process.env.REACT_APP_SERVER_PASSWORD
    }
});

liveUpdatesServer.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

export default liveUpdatesServer;
