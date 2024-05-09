import {createstore} from "redux";
import rootreducer from "./Redux/Reducer/main";

const store = createstore(
    rootreducer
)

export default store;


