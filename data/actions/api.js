import httpClient from '../apis/coin_paprika_api';
import { fetchCoinsFinish } from './state';

export function fetchCoins() {
    return function(dispatch) {
        const p = httpClient.get('tickers');
        p.then((response)=> {
            console.log(response.data.slice(0,5).sort(function(a,b){
                return a.rank - b.rank;
            }));
            const action = fetchCoinsFinish(response.data.slice(0,10).sort(function(a,b){
                return a.rank - b.rank;
            }));
            dispatch(action);
        });
    }
}

// export function fetchNews() {
//     return function(dispatch) {
//         const p =
//     }
// }