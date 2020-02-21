import {GET_DATA_REQUESTED, GET_DATA_DONE, GET_DATA_FAILED} from '../actions/currencies';

const initialState = [
    {name: 'A', isLoading: true, data: {}},
    {name: 'B', isLoading: true, data: {}},
];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUESTED:
            return state.map(table => {
                if (table.name === action.payload.name) {
                    return {...table, isLoading: true}
                }
                return table;
            });
        case GET_DATA_DONE:
            return state.map(table => {
                if (table.name === action.payload.name) {
                    return {...table, isLoading: false, data: action.payload.data[0]}
                }
                return table;
            });
        case GET_DATA_FAILED:
            return action.payload;
        default:
            return state;
    }
}