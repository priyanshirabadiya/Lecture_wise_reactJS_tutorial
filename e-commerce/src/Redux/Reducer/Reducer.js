import { toast } from 'react-toastify';

const initial_state = {
    carts: [],
    wish: [],
};

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.carts.find(item => item.value.id === action.payload.value.id);
            if (existingItem) {
                toast.warn("Item is already in the cart!");
                return state;  // Return the unchanged state if item is already in the cart
            } else {
                toast.success("Item added to cart!");
            }
            return {
                ...state,
                carts: [...state.carts, action.payload],
            };
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
};

export const widhlistreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "WISH_LIST":
            const existingitem = state.wish.find((item) => item.value.id === action.payload.value.id)
            if (existingitem) {
                toast.warn('Item is already in the cart!');
                return state;
            }
            else {
                toast.success("Item added to cart!");
            }
            return {
                ...state,
                wish: [...state.wish, action.payload],
            };
        case "REMOVE_FROM_WISH":
            const data = state.wish.filter((item) => item.value.id !== action.payload);
            console.log(data, "=====");
            return {
                ...state,
                wish: data,
            };
        default:
            return state;
    }
};
