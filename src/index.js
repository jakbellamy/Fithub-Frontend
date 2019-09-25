import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

const initialState = {
    navigation: {
        navigation: 'LOGIN'
    },
    user: {
        currentUser: null,
        errors: null
    }
}

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
     document.getElementById('root')
);

serviceWorker.unregister();
