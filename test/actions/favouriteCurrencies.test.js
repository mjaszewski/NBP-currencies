import configureStore from "redux-mock-store";
import {
    removeAllFavouriteCurrency,
    removeFavouriteCurrency,
    addFavouriteCurrency,
    DATA_REMOVE_ALL, DATA_REMOVE, DATA_ADDED
} from "../../src/actions/favouriteCurrencies"

const mockStore = configureStore();
const store = mockStore();

beforeEach(() => {
    store.clearActions();
});

describe("Favourite currencies actions", () => {
    it('Dispatches the correct action and payload - removeAllFavouriteCurrency', () => {
        store.dispatch(removeAllFavouriteCurrency());
        const expectedActions = [
            {
                type: DATA_REMOVE_ALL
            },
        ];
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Dispatches the correct action and payload - removeFavouriteCurrency', () => {
        const data = 'USD'
        store.dispatch(removeFavouriteCurrency(data));
        const expectedActions = [
            {
                type: DATA_REMOVE,
                payload: data,
            },
        ];
        expect(store.getActions()).toEqual(expectedActions);    });

    it('Dispatches the correct action and payload - addFavouriteCurrency', () => {
        const data = {
            currency: 'dolar amerykański',
            code: 'USD',
            mid: 3.9623,
            date: '2020-02-21'
        };

        store.dispatch(addFavouriteCurrency(data));
        const expectedActions = [
            {
                type: DATA_ADDED,
                payload: data
            },
        ];
        expect(store.getActions()).toEqual(expectedActions);
    });
});
