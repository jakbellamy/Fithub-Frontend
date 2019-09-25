import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

const initialState = {
    navigation: {
        path: '/login'
    },
    user: {
        currentUser: null
    }
}

const store = createStore(
    rootReducer,
    initialState
)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
     document.getElementById('root')
);

serviceWorker.unregister();
