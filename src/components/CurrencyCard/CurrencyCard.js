import React from "react";
import PropTypes from "prop-types";

import {Card, Button} from "semantic-ui-react";

const CurrencyCard = ({name, code, value, date, handleDelete}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{name} - {date}</Card.Header>
                <Card.Meta>{code}</Card.Meta>
                <Card.Description>
                    <strong>{value}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui one buttons">
                    <Button basic negative onClick={handleDelete(code)}>
                        Remove
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
}

CurrencyCard.propTypes = {
    name: PropTypes.string,
    code: PropTypes.string,
    value: PropTypes.number,
    date: PropTypes.string,
    handleDelete: PropTypes.func

};

export default CurrencyCard