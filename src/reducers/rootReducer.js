const initialState = {
    trans: [],
    customer: null,
    session: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TRANS':
            return {
                ...state,
                trans: action.payload,
            }
        case 'CUSTOMER':
            return {
                ...state,
                customer: action.payload,
            }
        case 'SESSION':
            return {
                ...state,
                session: action.payload,
            }
        default:
            break;
    }
    return state
}

export default rootReducer