import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import reducers from "./reducers";
import App from "./App"
import {rootSaga} from "./sagas";
import ReduxToastr from 'react-redux-toastr'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            position="top-right"
            getState={(state) => state.toastr}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            closeOnToastrClick/>
        <App/>
    </Provider>
    , document.getElementById("app")
);
