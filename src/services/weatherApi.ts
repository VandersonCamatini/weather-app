/*
    It's a good pattern separate the services of the rest of the application.
    Trying to make the functions more dynamic, but simple and direct.
*/


import axios from 'axios';

const API_KEY = '26f565ad38004fee97014621201209';
const URL =  'http://api.weatherapi.com/v1/current.json?';

export const getWeather = async ( query: String ) => {{

    const { data } = await axios.get(URL, {
        params: {
            q: query,
            key: API_KEY
        }
    })

    return data;
}}

