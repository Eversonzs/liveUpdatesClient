import axios from 'axios';

const liveUpdatesServer = axios.create({
    baseURL:`${process.env.REACT_APP_LIVE_UPDATES_SERVER}`,
    withCredentials: true,
});

liveUpdatesServer.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

export default liveUpdatesServer;