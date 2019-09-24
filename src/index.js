import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './reducers/rootReducer'

const initialState = {
    navigation: {
        path: '/'
    },
    user: {
        currentUser: null
    }
}

const store = createStore(
    rootReducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
     document.getElementById('root')
);

serviceWorker.unregister();
