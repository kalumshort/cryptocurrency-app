import httpClient from '../axios';
import { fetchCoinsFinish } from './state';

export function fetchCoins() {
    return function(dispatch) {
        const p = httpClient.get('tickers');
        p.then((response)=> {
            console.log(response.data.slice(0,5));
            const action = fetchCoinsFinish(response.data.slice(0,100));
            dispatch(action);
        });
    }
}