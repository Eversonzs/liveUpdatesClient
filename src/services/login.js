import liveUpdatesServer from './liveUpdatesServer.js';

const liveUpdatesLogin = () =>
    liveUpdatesServer.get(`/api/v1/login`,
    {
        email: 'eversonzs@hotmail.com',
        password: 'password',
    })
        .then(data => Promise.resolve(data))
        .catch(error => Promise.reject('Error while trying to login', error.response.data))

export default liveUpdatesLogin;
