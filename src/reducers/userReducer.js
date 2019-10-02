import {history} from '../history'

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('username', action.payload.user.name)
            return{...state, currentUser: action.payload.user, errors: null}
        case 'LOG_OUT':
            localStorage.clear()
            history.push('/login')
            return state = {...state, currentUser: null, path: '/login'}
        case 'FETCH_USER_DATA':
            return {...state, userData: action.payload}
        case 'USER_ERROR':
            return {...state, errors: action.payload}
        default:
            return state;
    }
}
