import {combineReducers} from "redux";

import currenciesReducer from "./currencies";
import favouriteCurrenciesReducer from "./favouriteCurrencies";
import {reducer as toastrReducer} from 'react-redux-toastr'


const rootReducers = combineReducers({
    currencies: currenciesReducer,
    favouriteCurrencies: favouriteCurrenciesReducer,
    toastr: toastrReducer
});

export default rootReducers;