import { combineReducers } from 'redux';

import currencyReducer from './currency';

const rootReducers = combineReducers({
    currency: currencyReducer
});

export default rootReducers;