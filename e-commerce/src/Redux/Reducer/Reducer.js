const initial_state = {
    carts: []
}

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        default:
            return state;
    }
}

