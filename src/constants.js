export function API_AT(endpoint){
    return `http://localhost:5001/${endpoint}`
}

export function PRODUCTION_AT(endpoint){
    return `http://159.89.177.40:5001/${endpoint}`
}

export const loginErrorMsg = 'bad username or password'
