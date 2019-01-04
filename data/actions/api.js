import httpClient from '../axios';
import { fetchCoinsFinish } from './state';

export function fetchCoins() {
    return function(dispatch) {
        const p = httpClient.get('/contacts?random');
        p.then((response)=> {
            const action = fetchCoinsFinish(response.data);
            dispatch(action);
        });
    }
}