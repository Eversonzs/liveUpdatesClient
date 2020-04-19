import liveUpdatesServer from './liveUpdatesServer.js';

const liveUpdatesLogin = (email, password) =>
    liveUpdatesServer.post(
        `/api/v1/user/login`,
        { email, password }
    )
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(`Error while trying to login ${error}`))

export default liveUpdatesLogin;