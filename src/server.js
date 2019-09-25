import {connect} from 'react-redux';

const request = (method) => (url, body) => {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}` 
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const loginRequest = (url, body) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    // .then(res => localStorage.setItem('token', res.token))
}

export const server = {
    get: request('GET'),
    patch: request('PATCH'),
    post: request('POST'),
    delete: request('DELETE')
}

export const logReq = connect()(loginRequest)