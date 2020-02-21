import { combineReducers } from 'redux';

import currenciesReducer from './currencies';
import favouriteCurrenciesReducer from './favouriteCurrencies';

const rootReducers = combineReducers({
    currencies: currenciesReducer,
    favouriteCurrencies: favouriteCurrenciesReducer
});

export default rootReducers;