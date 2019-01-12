import axios from 'axios';

export default axios.create({
    baseURL: 'https://robocontacts.herokuapp.com/api',
    header: {
        'Accept': 'application/json',
        // 'Apikey': 'cce2fe13882b5e8a665a1b4e50e14adf061499640598480934476411b022c465'

    }
});