export const GET_DATA_REQUESTED = "GET_DATA_REQUESTED";
export const GET_DATA_DONE = "GET_DATA_DONE";

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