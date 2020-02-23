import configureStore from "redux-mock-store";
import mockedStore from "../mocks/store";
import {
    getDataCurrenciesDone,
    getDataCurrenciesRequested,
    GET_DATA_DONE,
    GET_DATA_REQUESTED,
} from "../../src/actions/currencies"

const mockStore = configureStore();
const store = mockStore();

beforeEach(() => {
    store.clearActions();
});

describe("Currencies actions", () => {
    it('Dispatches the correct action and payload - getDataCurrenciesRequested', () => {
        const name = 'A'
        store.dispatch(getDataCurrenciesRequested(name));
        const expectedActions = [
            {
                type: GET_DATA_REQUESTED,
                payload: name,
            },
        ];
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Dispatches the correct action and payload - getDataCurrenciesDone', () => {
        const data = {};
        const name = "A";
        store.dispatch(getDataCurrenciesDone(data, name));
        const expectedActions = [
            {
                type: GET_DATA_DONE,
                payload: {data, name},
            },
        ];
        expect(store.getActions()).toEqual(expectedActions);
    });
});
