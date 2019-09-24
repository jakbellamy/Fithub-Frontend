const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, currentUser: action.payload}
        case 'LOG_OUT':
            return {...state, currentUser: null}
        case 'FETCH_USER_DATA':
            return {...state, userData: action.payload}
        default:
            return state;
    }
}
  
export default userReducer