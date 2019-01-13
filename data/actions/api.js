import httpClient from '../axios';
import { fetchCoinsFinish } from './state';

export function fetchCoins() {
    return function(dispatch) {
        const p = httpClient.get('coins');
        p.then((response)=> {
            console.log(response.data);
            const action = fetchCoinsFinish(response.data);
            dispatch(action);
        });
    }
}