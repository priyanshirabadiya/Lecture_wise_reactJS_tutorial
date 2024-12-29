import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function Home() {

    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    const loadUserData = () => {
        axios.get("http://localhost:3001/users")
            .then((response) => {
                setData(response.data);
                setOriginalData(response.data); // Store original data for resetting search
            })
            .catch((error) => {
                console.log(error, "error");
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then((response) => {
                loadUserData();
            })
            .catch((error) => {
                console.log(error, "error");
            })
    }

    useEffect(() => {
        loadUserData();
    }, [])

    const onHandleSearch = (value) => {
        if (value) {
            const results = originalData.filter((user) => {
                return (
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value.toLowerCase())
                );
            });
            setData(results);
        } else {
            setData(originalData); // Reset to original data if search is cleared
        }
    }

    return (
        <>
            <Navbar onSearch={onHandleSearch} />
            
                <button
                    type="button"
                    className="rounded-md my-5 ms-10 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
             <Link to="/create" >
                    Add new employee
            </Link>
                </button>
            <div className="mx-10 relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cvalue, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cvalue.name}
                                </th>
                                <td className="px-6 py-4">
                                    <Link to={`/edit/${cvalue.id}`}>
                                        Edit
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    {cvalue.cate}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => onDelete(cvalue.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
