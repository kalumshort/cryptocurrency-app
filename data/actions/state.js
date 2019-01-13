export function fetchCoinsFinish(coinsData) {
    return {
        type: 'FETCH_COINS_FINISH',
        payload: coinsData
    };
}

export function fetchNewsFinish(newsData) {
    return {
        type: 'FETCH_NEWS_FINISH',
        payload: newsData
    };
}