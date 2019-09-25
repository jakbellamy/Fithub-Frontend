const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, currentUser: action.payload, errors: null}
        case 'LOG_OUT':
            return {...state, currentUser: null}
        case 'FETCH_USER_DATA':
            return {...state, userData: action.payload}
        case 'FAILED_LOGIN':
            return {...state, errors: action.payload}
        default:
            return state;
    }
}
  
export default userReducer