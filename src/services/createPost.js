import liveUpdatesServer from './liveUpdatesServer.js';

const liveUpdatesRegister = (postData) => {
    const {
        postCategoryId,
        userId,
        title,
        description,
        image,
    } = postData;

    return liveUpdatesServer.post(
        `/api/v1/post/`,
        {
            postCategoryId,
            userId,
            title,
            description,
            image
        }
    )
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data))
}

export default liveUpdatesRegister;
