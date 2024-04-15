import React , {useEffect , useState }  from 'react';

export default function Effect(){
        const [increment , setincre] = useState(0);
        const [deincrement , setdecre] = useState(0);

        useEffect(() => {
            console.log('Use effect run depend on increment');
        },[increment]);

        // useEffect(() => {
        //     console.log('Use effect run depend on decrement');
        // },[deincrement]);

        const increfun = () => {
            // console.log('incre');
            setincre(increment + 1);
        }
        const decrefun = () => {
            // console.log('decre');
            setdecre(deincrement - 1);
        }
        return (
            <>
                <p>increment</p>
                <h1>{increment}</h1>
                <button onClick={increfun} >click here</button>
                <p>{deincrement}</p>
                <button onClick={decrefun} >click here</button>
            </>
        )

}

