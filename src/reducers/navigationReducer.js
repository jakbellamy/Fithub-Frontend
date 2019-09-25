import {history} from '../history'

export const navigationReducer = (state = null, action) => {
    switch(action.type){
        case 'NAV_LOGIN':
            history.push('/login')
            return {...state, path: '/login'}
        case 'NAV_SIGNUP':
            history.push('/register')
            return {...state, path: '/register'}
        case 'HOME':
            history.push('/home')
            return {...state, path: '/home'}
        case 'NAV_SET_FORM':
            history.push('/new_set')
            return {...state, path: '/new_set'}
        case 'NAV_SET_LIB':
            history.push('/set_lib')
            return {...state, path: '/set_lib'}
        case 'NAV_STITCHER':
            history.push('/stitcher')
            return {...state, path: '/stitcher'}
        case 'NAV_WORKOUTS':
            history.push('/workouts')
            return {...state, path: '/workouts'}
        case 'NAV_TO_WOKROUT':
            history.push(`workout/${action.payload}`)
            return {...state, path: `/workout/${action.payload}`}
        default:
            return state
    }
}