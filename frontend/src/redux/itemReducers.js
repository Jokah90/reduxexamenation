let initialState = {
    order: []
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COFFEE':
            return {
                ...state,
                order: [...state.order, action.payload]
            }
            default:
                return {
                    ...state
                }
    }
}

export default itemReducer;