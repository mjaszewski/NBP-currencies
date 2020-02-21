import {DATA_ADDED, DATA_REMOVE, DATA_REMOVE_ALL} from "../actions/favouriteCurrencies";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case DATA_ADDED:
            return [...state, action.payload];
        case DATA_REMOVE:
            return state.filter(val => val.code !== action.payload);
        case DATA_REMOVE_ALL:
            return [];
        default:
            return state;
    }
}