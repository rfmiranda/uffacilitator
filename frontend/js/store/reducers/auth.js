
const INITIAL_STATE = {   
    status: false,
    credencial: {}
}

export default function auth(state = INITIAL_STATE, action) {
    if (action.type === 'LOGIN_AUTH') {
        return { ...state, status: action.status, credencial: action.credencial }
    }

    return state;
}