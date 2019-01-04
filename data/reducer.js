function reducer ( currentState, action) {
    switch(action.type) {
        case 'FETCH_COIN_FINISH': {
            return {
                ...currentState,
                coins: action.payload
            };
        }default: {
            return currentState;
        }
    }
};
export default reducer;