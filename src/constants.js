export function API_AT(endpoint){
    return `http://localhost:5000/${endpoint}`
}

export function PRODUCTION_AT(endpoint){
    return `http://159.89.177.40:5000/${endpoint}`
}

export const loginErrorMsg = 'bad username or password'