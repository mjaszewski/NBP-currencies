import {DATA_ADDED} from '../actions/favouriteCurrencies';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case DATA_ADDED:
            return [...state, action.payload];
        default:
            return state;
    }
}