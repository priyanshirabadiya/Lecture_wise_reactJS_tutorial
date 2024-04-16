// import '../style.css';   
import React, { useState } from 'react'

export default function Textform() {

    const [text, setText] = useState(0);
    console.log(text);

    const countincre = () => {
        let count = text + 1;
        setText(count);
    }

    const countdecre = () => {
        let count = text - 1;
        setText(count);
    }
    return (
        <div className="container w-1/3  border-4 mt-40 ">
            <div className='text-center mt-9 mb-2'>Counted number is : {text}</div>
            <div className="flex items-center justify-center mb-10 ">
                <button className='btn btn-primary mt-2 me-2' onClick={countincre} >Click to increment</button>
                <button className='btn btn-primary mt-2 ' onClick={countdecre} >Click to decrement</button>
            </div>
        </div>
    )
}



