import React, {Component} from 'react';

import {Table, Header, Dimmer, Loader, Segment, Button} from "semantic-ui-react";

class CurrencyTable extends Component {

    componentDidMount() {
    }

    handleAddToFavourite = () => {
    };

    createTable = () => (
            <Segment>
                <Dimmer>
                    <Loader />
                </Dimmer>
                <Header>Table A</Header>
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
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell width={3}>
                                <Button positive onClick={this.handleAddToFavourite}>Add to favourite</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>);

    render() {
        return (
            <div>
                {this.createTable()}
            </div>
        );
    }
}

export default CurrencyTable