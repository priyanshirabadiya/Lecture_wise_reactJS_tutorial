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
        case "REMOVE_FROM_CART":
            const newData = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: newData,
            };
        default:
            return state;
    }
}


