import { combineReducers } from 'redux'

import {navigationReducer} from './navigationReducer'
import {userReducer} from './userReducer'

const rootReducer = combineReducer({
    navigation: navigationReducer,
    user: userReducer
})