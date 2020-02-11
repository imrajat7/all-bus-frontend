import {SIGN_IN, LOG_OUT} from '../actions/actions';
const initState = {
    token: localStorage.getItem('token'),
}

const loggedReducer = (state=initState,action)=>{
    switch(action.type){
        case SIGN_IN:
            return{
                token: action.token,
            }
        case LOG_OUT:
            return{
                token: null,
            }
        default:
            return state;
    }
}

export default loggedReducer