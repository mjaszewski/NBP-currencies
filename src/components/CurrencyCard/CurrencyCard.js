import React, {Component} from 'react';
import PropTypes from "prop-types";PropTypes

import {Card, Button} from "semantic-ui-react";

class CurrencyCard extends Component {

    componentDidMount() {
    }

    handleDelete = (id) => {
        this.props.handleDelete(id)
    };

    render() {
        const { name, id, value} = this.props;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{id}</Card.Meta>
                    <Card.Description>
                        <strong>{value}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui one buttons'>
                        <Button basic negative onClick={this.handleDelete(id)}>
                            Remove
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

CurrencyCard.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.number,
    handleDelete: PropTypes.func

};

export default CurrencyCard