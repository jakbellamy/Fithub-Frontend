import {history} from '../history'
export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return{...state, currentUser: action.payload, errors: null}
        case 'LOG_OUT':
            state = {...state, currentUser: null}
        case 'FETCH_USER_DATA':
            return {...state, userData: action.payload}
        case 'USER_ERROR':
            return {...state, errors: action.payload}
        default:
            return state;
    }
}
