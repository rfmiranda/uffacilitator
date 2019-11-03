
const INITIAL_STATE = {   
    status: true    
}

export default function auth(state = INITIAL_STATE, action) {    
    if (action.type === 'LOGIN_AUTH') {
        return { ...state, status: true }
    }

    return state;
}