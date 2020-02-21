export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export function getDataCurrenciesRequested(name) {
    return {
            type: GET_DATA_REQUESTED,
            payload: name,
    };
}

export function getDataCurrenciesDone(data, name) {
    return {
        type: GET_DATA_DONE,
        payload: {data, name},
    };
}

export function getDataCurrenciesFailed(error) {
    return {
        type: GET_DATA_FAILED,
        payload: error
    };
}