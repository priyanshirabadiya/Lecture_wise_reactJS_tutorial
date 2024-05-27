import { toast } from 'react-toastify';

const initial_state = {
    carts: [],
    wish: [],
    quantities: [],
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

        case "UPDATE_QUANTITY":
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [action.payload.id]: action.payload.quantity
                }
            }
        default:
            return state;
    }
};

export const wishlistreducer1 = (state = initial_state, action) => {
    switch (action.type) {
        case "wish_list":
            const exist = state.wish.find((item) => item.value.id === action.payload.value.id);
            if (exist) {
                toast.warn('item is already in wishlist');
                return state;
            } else {
                toast.success('added to wishlist');
                return {
                    ...state,
                    wish: [...state.wish, action.payload]
                };
            }
        case "Remove_wish":
            const updatedWish = state.wish.filter((item) => item.value.id !== action.payload);
            return {
                ...state,
                wish: updatedWish
            };
        default:
            return state;
    }
};

