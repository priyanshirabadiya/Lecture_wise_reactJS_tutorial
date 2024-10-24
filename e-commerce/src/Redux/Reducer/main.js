// combine all reducer here and then send store
// (object wise)

import { combineReducers } from "redux"
import { cartreducer, wishlistreducer1 } from './Reducer';

const rootreducer = combineReducers({
    cartreducer, wishlistreducer1
})

export default rootreducer;