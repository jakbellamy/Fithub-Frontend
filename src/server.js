const request = (method) => (url, body) => {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${localStorage.getItem('token')}` 
        },
        body: JSON.stringify(body)
    })
    .them(res => res.json())
}

export const server = {
    get: request('GET'),
    patch: request('PATCH'),
    post: request('POST'),
    delete: request('DELETE')
}