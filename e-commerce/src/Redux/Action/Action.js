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
    return {
        type: "WISH_LIST",
        payload: item
    }
}

export const REMOVEWISH = (id) => {
    return {
        type: "REMOVE_FROM_WISH",
        payload: id
    }
}

