import React from 'react'
let initialstate = 0;
const changethenumber = (state = initialstate, action) => {
    switch(action.type){
        case "Increment" : return state + 1
        case "decrement" : return state - 1
        default : return state;
    }

}

export default changethenumber;


