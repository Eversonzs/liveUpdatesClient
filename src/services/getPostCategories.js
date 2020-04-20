import liveUpdatesServer from './liveUpdatesServer.js';

const getPostCategories = () =>
    liveUpdatesServer.get(`/api/v1/postCategory`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data))

export default getPostCategories;
