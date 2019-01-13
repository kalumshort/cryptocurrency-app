import httpClient from '../axios';
import { fetchCoinsFinish } from './state';

export function fetchCoins() {
    return function(dispatch) {
        const p = httpClient.get('/data/top/mktcapfull?limit=10&tsym=USD&api_key=cce2fe13882b5e8a665a1b4e50e14adf061499640598480934476411b022c465');
        p.then((response)=> {
            const action = fetchCoinsFinish(response.data.Data);
            console.log(action);
            dispatch(action);
        });
    }
}