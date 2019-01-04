import axios from 'axios';

export default axios.create({
    baseURL: 'https://robocontacts.herokuapp.com/api',
    header: {
        'Accept': 'application/json'

    }
});