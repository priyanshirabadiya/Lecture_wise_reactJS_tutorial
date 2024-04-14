import React , { useContext} from "react";
import { context1 } from "../App";

function ComC(){
    const name = useContext(context1)
    return (
        <h1>hello world this is ... {name}</h1>
    )
}

export default ComC;
