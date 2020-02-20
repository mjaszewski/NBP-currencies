export const FETCH_DATA = 'FETCH_DATA';

export function fetchCurrency(data) {
    return {
        type: 'FETCH_DATA',
        payload: data
    };
}