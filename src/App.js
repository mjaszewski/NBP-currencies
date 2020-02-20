import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./styles/main.scss";

import { Header, Container, Tab } from 'semantic-ui-react';
import TableGroup from "./components/TableGroup"
import CurrencyCardGroup from "./components/CurrencyCardGroup"


class App extends Component {

    componentDidMount() {}

    getPanes = () => [
        {
            menuItem: 'Currency list',
            render: () => <Tab.Pane attached={false}><TableGroup /></Tab.Pane>,
        },
        {
            menuItem: 'Favourite currencies',
            render: () => <Tab.Pane attached={false}><CurrencyCardGroup /></Tab.Pane>,
        },

    ];


    render() {
        return (
            <Container className="container">
                <Header as="h2" textAlign="center" >NBP Currencies</Header>
                <Tab menu={{ secondary: true, pointing: true }} panes={this.getPanes()} />
            </Container>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {})(App);
