import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from "redux";
import converterReducer from "./store/reducers/converter";
import countriesReducer from "./store/reducers/countries";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

const reducers = combineReducers({
    countries: countriesReducer,
    converter: converterReducer
});
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render( <Provider store={store}>
    < App / > 
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();