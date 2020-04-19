import liveUpdatesServer from './liveUpdatesServer.js';

const liveUpdatesRegister = (userData) =>
    liveUpdatesServer.post(
        `/api/v1/user/`,
        { userData }
    )
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data))

export default liveUpdatesRegister;
