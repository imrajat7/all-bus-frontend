export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';

export function signIn(token){
    return {type: SIGN_IN, token: token};
}

export function logOut(){
    return {type: LOG_OUT};
}