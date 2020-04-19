import liveUpdatesServer from './liveUpdatesServer.js';

const getUserByUsername = (username) =>
    liveUpdatesServer.get(`/api/v1/user/byUsername/${username}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data))

export default getUserByUsername;
