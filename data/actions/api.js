import httpClient from '../apis/coin_paprika_api';
import httpClientCC from '../apis/cryptocompare_api';
import { fetchCoinsFinish } from './state';
import { fetchNewsFinish } from './state';

export function fetchCoins() {
    return function(dispatch) {
        const p = httpClient.get('tickers');
        p.then((response)=> {
            const action = fetchCoinsFinish(response.data.slice(0,10).sort(function(a,b){
                return a.rank - b.rank;
            }));
            dispatch(action);
        });
    }
}

export function fetchNews() {
    return function(dispatch) {
        const p = httpClientCC.get('/data/v2/news/?lang=EN');
        p.then((response)=> {
            console.log(response.data.Data.slice(0,4));
            const action = fetchNewsFinish(response.data.Data);
            dispatch(action);
        })
    }
}