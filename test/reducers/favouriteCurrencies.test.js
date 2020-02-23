import reducer from "../../src/reducers/favouriteCurrencies";
import {
    DATA_ADDED
} from "../../src/actions/favouriteCurrencies"


describe('DATA_ADDED', () => {
    test('returns the correct state', () => {
        const data = {
            currency: 'dolar amerykański',
            code: 'USD',
            mid: 3.9623,
            date: '2020-02-21'
        };
        const action = {type: DATA_ADDED, payload: data,};
        const expectedState = [{
            currency: 'dolar amerykański',
            code: 'USD',
            mid: 3.9623,
            date: '2020-02-21'
        }];

        expect(reducer(undefined, action)).toEqual(expectedState);
    });
});