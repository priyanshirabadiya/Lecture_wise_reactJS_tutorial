import React, { useState , useEffect } from 'react'
import Data from './TableData';   
function Tablesec() {
    const [data,setData] = useState(Data);
    console.log(data);

    useEffect(()=>{
        setData(Data)
    },[])

    return (
        <table className="table-auto w-full text-center">
            <thead className=' h-10 bg-gray-500 text-white border'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>PhoneNo</th>
                </tr>
            </thead>
            <tbody>
                {data.map((cvalue, ind) => {
                    return (
                    <tr className=' h-10 bg-gray-400 text-white border'>
                        <td>{cvalue.id}</td>
                        <td>{cvalue.name}</td>
                        <td>{cvalue.email}</td>
                        <td>{cvalue.city}</td>
                        <td>{cvalue.phone}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Tablesec
