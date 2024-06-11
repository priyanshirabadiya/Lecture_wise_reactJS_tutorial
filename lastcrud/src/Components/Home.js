// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Navbar from './Navbar';

// export default function Home() {

//     const [data, setdatacate] = useState([]);

//     const loaduserdata = () => {
//         axios.get("http://localhost:3001/users")
//             .then((reaponse) => {
//                 setdatacate(reaponse.data)
//                 // console.log(reaponse.data)
//             })
//             .catch((error) => {
//                 console.log(error, "error");
//             })
//     }

//     const ondelete = (id) => {
//         axios.delete(`http://localhost:3001/users/${id}`)
//             .then((response) => {
//                 loaduserdata();
//             })
//             .catch((error) => {
//                 console.log(error, "error");
//             })
//     }

//     useEffect(() => {
//         loaduserdata();
//     }, [])

//     const onhandleearch = (value) => {
//         if (value) {
//             const results = data.filter((user) => {
//                 return (
//                     user &&
//                     user.name &&
//                     user.name.toLowerCase().includes(value.toLowerCase())
//                 );
//             });
//             setdatacate(results);
//         } else {
//             setdatacate(data); // Reset to original data if search is cleared
//         }
//     }

//     return (
//         <>

//             <Navbar onSearch={onhandleearch} />
//             <button className='items-center flex justify-center w-full bg-black p-5 text-white' >
//                 <Link to="/create" >Add new data</Link>
//             </button>
//             <div class="relative overflow-x-auto">
//                 <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             <th scope="col" class="px-6 py-3">
//                                 Product name
//                             </th>
//                             <th scope="col" class="px-6 py-3">
//                                 Color
//                             </th>
//                             <th scope="col" class="px-6 py-3">
//                                 Category
//                             </th>
//                             <th scope="col" class="px-6 py-3">
//                                 Price
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((cvalue, index, arr) => {
//                             return (
//                                 <>
//                                     <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                         <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                             {cvalue.name}
//                                         </th>
//                                         <td class="px-6 py-4">
//                                             <Link to={`/edit/${cvalue.id}`} >
//                                                 Edit
//                                             </Link>
//                                         </td>
//                                         <td class="px-6 py-4">
//                                             {cvalue.cate}
//                                         </td>
//                                         <td class="px-6 py-4">
//                                             <button onClick={() => ondelete(cvalue.id)} >Delete</button>
//                                         </td>
//                                     </tr>
//                                 </>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>

//         </>
//     )
// }


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
            <button className='items-center flex justify-center w-full bg-black p-5 text-white' >
                <Link to="/create">Add new data</Link>
            </button>
            <div className="relative overflow-x-auto">
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
