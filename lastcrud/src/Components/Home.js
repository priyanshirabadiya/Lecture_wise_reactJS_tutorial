import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

    const [data, setdata] = useState([]);
    const getitemdata = () => {
        const response = axios.get("http://localhost:3001/users")
            .then((response) => {
                // console.log(response.data, "responsedate");
                setdata(response.data)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    useEffect(() => {
        getitemdata();
    })

    const onclickremove = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then((responece) => {
                getitemdata();
            })
            .catch((error) => {
                console.log(error, "error");
            })
    }



    return (
        <div className='mt-10 mx-10' >
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-white dark:text-white">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cvalue, index, arr) => {
                            const { name, category, id } = cvalue;
                            return (
                                <>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                            {name}
                                        </th>
                                        <Link to={`/edit/${id}`} >
                                        <td class="px-6 py-4">
                                            Edit
                                        </td>
                                        </Link>
                                        <td class="px-6 py-4">
                                            {category}
                                        </td>
                                        <td class="px-6 py-4">
                                            <button onClick={() => { onclickremove(id) }}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
