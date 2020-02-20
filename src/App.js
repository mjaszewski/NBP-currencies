import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./styles/main.scss"

class App extends Component {

    componentDidMount() {}

    render() {
        return (
            <div>
               Start
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {})(App);

