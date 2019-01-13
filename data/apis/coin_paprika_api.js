import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.coinpaprika.com/v1/',
    header: {
        'Accept': 'application/json',

    }
});