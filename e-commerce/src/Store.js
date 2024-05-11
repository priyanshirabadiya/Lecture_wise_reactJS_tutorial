import { createStore } from 'redux';
import rootreducer from "./Redux/Reducer/main";

const store = createStore(
    rootreducer
)

export default store;