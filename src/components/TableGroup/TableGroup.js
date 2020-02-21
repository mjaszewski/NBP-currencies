import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CurrencyTable from "../CurrencyTable/CurrencyTable";
import {getDataCurrenciesRequested, getDataCurrenciesDone} from "../../actions/currencies"
import {addFavouriteCurrency} from "../../actions/favouriteCurrencies"

class TableGroup extends Component {

    componentDidMount() {
        this.props.getDataCurrenciesRequested("A");
        this.props.getDataCurrenciesRequested("B");
    }

    addFavourite = (code, tableName) => () => {
        const {currencies} = this.props;
        const table = currencies.find(currencyTable => currencyTable.name = tableName);
        const currency = table.data.rates.find(currency => currency.code = code)
        currency.date = table.data.effectiveDate;
        this.props.addFavouriteCurrency(currency);
    };

    render() {
        const {currencies, favouriteCurrencies} = this.props;
        return (
            <div>
                {currencies.map(table => {
                        const {data: {effectiveDate, rates}} = table;
                        return (<CurrencyTable key={table.name} tableName={table.name} data={rates} date={effectiveDate}
                                               handleAddFavourite={this.addFavourite} isLoading={table.isLoading}
                                               favourite={favouriteCurrencies}/>)
                    }
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currencies: state.currencies,
        favouriteCurrencies: state.favouriteCurrencies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDataCurrenciesRequested,
        getDataCurrenciesDone,
        addFavouriteCurrency
    }, dispatch);
};

TableGroup.propTypes = {
    getDataCurrenciesRequested: PropTypes.func,
    getDataCurrenciesDone: PropTypes.func,
    addFavouriteCurrency: PropTypes.func,
    currencies: PropTypes.array,
    favouriteCurrencies: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableGroup);
