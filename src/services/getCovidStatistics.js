import axios from 'axios';

const getCovidStatistics = () =>
    axios({
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      }
    })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error.response.data))

export default getCovidStatistics;
