export const DATA_ADDED = "DATA_ADDED";
export const DATA_REMOVE = "DATA_REMOVE";
export const DATA_REMOVE_ALL = "DATA_REMOVE_ALL";

export function addFavouriteCurrency(data) {
    return {
        type: DATA_ADDED,
        payload: data,
    };
}

export function removeFavouriteCurrency(data) {
    return {
        type: DATA_REMOVE,
        payload: data,
    };
}

export function removeAllFavouriteCurrency() {
    return {
        type: DATA_REMOVE_ALL,
    };
}