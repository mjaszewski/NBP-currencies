import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {toastr} from "react-redux-toastr";
import {Card, Button, Message} from "semantic-ui-react";
import CurrencyCard from "../CurrencyCard";
import {bindActionCreators} from "redux";
import {removeFavouriteCurrency, removeAllFavouriteCurrency} from "../../actions/favouriteCurrencies";


class CurrencyCardGroup extends Component {

    handleDelete = (code) => () => {
        this.props.removeFavouriteCurrency(code);
        toastr.success("Success", "Currency was successfully removed from favourites");
    };

    handleDeleteAll = () => {
        this.props.removeAllFavouriteCurrency();
        toastr.success("Success", "Currencies was successfully removed from favourites");
    };

    render() {
        const {favouriteCurrencies} = this.props;

        return (
            <div>
                <div className="delete-button-container">
                    <Button id="remove-all" negative disabled={favouriteCurrencies.length === 0} onClick={this.handleDeleteAll}>Remove
                        All</Button>
                </div>
                <Card.Group>
                    {favouriteCurrencies.length === 0 && (
                        <Message className="no-display-message">
                            <Message.Header>Nothing to display</Message.Header>
                        </Message>
                    )}
                    {favouriteCurrencies.map(currency => {
                            return (
                                <CurrencyCard key={currency.currency} name={currency.currency} code={currency.code}
                                              value={currency.mid} date={currency.date} handleDelete={this.handleDelete}/>
                            )
                        }
                    )}
                </Card.Group>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        favouriteCurrencies: state.favouriteCurrencies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeFavouriteCurrency,
        removeAllFavouriteCurrency,
    }, dispatch);
};

CurrencyCardGroup.propTypes = {
    removeFavouriteCurrency: PropTypes.func,
    removeAllFavouriteCurrency: PropTypes.func,
    favouriteCurrencies: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCardGroup);
