// export const ADD = (item) => {
//     return {
//         type:"ADD_TO_CART",
//         payload:item
//     }
// }
//  const REMOVE = (id) => {
//     return {
//         type:"ADD_TO_CART",
//         payload:id
//     }
// }
// export default REMOVE;

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
        type: "Wish_list",
        payload: item
    }
}

