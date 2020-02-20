import React, {Component} from 'react';
import {Card, Button} from "semantic-ui-react";

import CurrencyCard from "../CurrencyCard";

class CurrencyCardGroup extends Component {

    componentDidMount() {}

    handleDelete = () => {
    };

    handleDeleteAll = () => {
    };

    render() {
        return (
            <div>
                <div className="delete-button-container">
                    <Button negative onClick={this.handleDeleteAll}>Remove All</Button>
                </div>
                <Card.Group>
                    <CurrencyCard name={"test"} id={"test"} value={"test"} handleDelete={this.handleDelete} />
                </Card.Group>
            </div>

        );
    }
}

export default CurrencyCardGroup