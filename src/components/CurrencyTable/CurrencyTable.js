import React from "react";
import PropTypes from "prop-types"

import {Table, Header, Dimmer, Loader, Segment, Button} from "semantic-ui-react";

const CurrencyTable = ({tableName, data, date, handleAddFavourite, isLoading, favourites}) => {
    const renderBody = data && data.map(item => {

        return (
            <Table.Row key={item.code}>
                <Table.Cell className="currency-name">{item.currency}</Table.Cell>
                <Table.Cell className="currency-code">{item.code}</Table.Cell>
                <Table.Cell className="currency-value">{item.mid} zł</Table.Cell>
                <Table.Cell width={3}>
                    <Button
                            className="add-favourite-button"
                            positive
                            disabled={favourites && favourites.includes(item.code)}
                            onClick={handleAddFavourite(item.code, tableName)}>Add to favourite</Button>
                </Table.Cell>
            </Table.Row>
        )
    });

    return (
        <Segment>
            <Dimmer active={isLoading}>
                <Loader/>
            </Dimmer>
            <Header>Table {tableName} - {date}</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Currency</Table.HeaderCell>
                        <Table.HeaderCell>Code</Table.HeaderCell>
                        <Table.HeaderCell>Value</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {renderBody}
                </Table.Body>
            </Table>
        </Segment>);
};

CurrencyTable.propTypes = {
    tableName: PropTypes.string,
    data: PropTypes.array,
    date: PropTypes.string,
    handleAddFavourite: PropTypes.func,
    isLoading: PropTypes.bool,
    favourites: PropTypes.array,
};

export default CurrencyTable