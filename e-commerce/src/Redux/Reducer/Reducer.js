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
            // action.payload's id is that we click on remove button id 
        case "REMOVE_FROM_CART":
            const data = state.carts.filter((item) => item.value.id !== action.payload);
            return {
                ...state,
                carts: data,
            };
        default:
            return state;
    }
}

const initial_statewishl = {
    carts2: []
}


export const widhlistreducer = (state = initial_statewishl , action) => {
    switch(action.type){
        case "WISH_LIST":
            return{
                ...state,
                carts2 : [...state.carts2 , action.payload]
            }
        default: 
            return state;
    }
}


