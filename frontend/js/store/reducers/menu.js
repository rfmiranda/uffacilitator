
const INITIAL_STATE = {   
    left: false    
}

export default function menu(state = INITIAL_STATE, action) {
    if (action.type === 'MENU_TOGGLE_DRAWER') {
        return { ...state, [action.side]: action.open }
    }

    return state;
}