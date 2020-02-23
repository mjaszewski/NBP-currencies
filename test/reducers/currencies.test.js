import reducer from "../../src/reducers/currencies";
import {
    GET_DATA_DONE,
    GET_DATA_REQUESTED,
} from "../../src/actions/currencies"


describe('GET_DATA_DONE', () => {
    test('returns the correct state', () => {
        const data = [{
            table: 'A',
            no: '036/A/NBP/2020',
            effectiveDate: '2020-02-21',
            rates: [
                {
                    currency: 'bat (Tajlandia)',
                    code: 'THB',
                    mid: 0.1252
                },
                {
                    currency: 'dolar amerykański',
                    code: 'USD',
                    mid: 3.9623,
                    date: '2020-02-21'
                }
            ]
        }];
        const action = {type: GET_DATA_DONE, payload: {data: data, name: 'A'}};
        const expectedState = [{"data": data[0], "isLoading": false, "name": "A"}, {
            "data": {},
            "isLoading": true,
            "name": "B"
        }];

        expect(reducer(undefined, action)).toEqual(expectedState);
    });
});

describe('GET_DATA_REQUESTED', () => {
    test('returns the correct state', () => {
        const payload = "A";
        const action = {type: GET_DATA_REQUESTED, payload};
        const expectedState = [{"data": {}, "isLoading": true, "name": "A"}, {
            "data": {},
            "isLoading": true,
            "name": "B"
        }];

        expect(reducer(undefined, action)).toEqual(expectedState);
    });
});