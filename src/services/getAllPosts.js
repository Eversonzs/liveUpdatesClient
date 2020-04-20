import liveUpdatesServer from './liveUpdatesServer.js';

const getAllPosts = () =>
    liveUpdatesServer.get(`/api/v1/post/`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data))

export default getAllPosts;
