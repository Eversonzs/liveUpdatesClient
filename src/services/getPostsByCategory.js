import liveUpdatesServer from './liveUpdatesServer.js';

const getPostsByCategory = (categoryId) =>
    liveUpdatesServer.get(`/api/v1/post/byCategoryId/${categoryId}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data))

export default getPostsByCategory;
