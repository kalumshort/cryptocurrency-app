export function fetchCoinsFinish(coinsData) {
    return {
        type: 'FETCH_COINS_FINISH',
        payload: coinsData
    };
}