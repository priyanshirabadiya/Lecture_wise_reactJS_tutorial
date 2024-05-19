export const ADD = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export const REMOVE = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export const Wish = (item) => {
    return{
        type : "wish_list",
        payload : item
    }
}

export const Removewish = (id) => {
    return {
        type : "Remove_wish",
        payload : id
    }
}

export const UPDATE_QUANTITY = (id , quantity) => {
    return {
        type : "UPDATE_QUANTITY",
        payload : {id , quantity}
    }
} 