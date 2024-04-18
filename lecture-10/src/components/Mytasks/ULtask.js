import React, { useState } from 'react'
export default function ULtask() {
    const [upper, setUpper] = useState('');

    const inputchange = (e) => {
        setUpper(e.target.value)
    }
    const chanheto = () => {
        setUpper(upper.toUpperCase());
    }
    const lowerto = () => {
        setUpper(upper.toLowerCase());
    }
    const came = () => {
        setUpper(() => {
            let arr = upper.split(' ');
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            return arr.join(' ');
        })
    }

    return (
        <div>
            <input type="text" className='mb-5 mt-5 p-5  border-4' value={upper} onChange={inputchange} />
            <div className='mt-5' >
                <button onClick={chanheto}>click to uppercase</button>
                <div><button onClick={lowerto} >click to lowercase</button></div>
                <div><button onClick={came}>click to camelcase</button></div>
            </div>
        </div>
    )
}


