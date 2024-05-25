import React, { useEffect, useState , useRef } from 'react'
import Navbar from './Navbar'
import axios from "axios";
import { Link } from 'react-router-dom'

export default function Edit() {
  const [data, setdata] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const loaduser = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setdata(res.data);
    console.log(res.data, "res");
  }
  
  useEffect(() => {
    loaduser();
  }, []);
  
  const removeitem = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`)
    .then((responece) => {
      loaduser();
    })
    .catch((error)=> {
      console.log(error , "error")
    })
  }

// ------------------------------------------------------

  const toggledropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const Accendingdata = () => {
    const sorteddata =  [...data].sort((a,b) => a.name.localeCompare(b.name))
    setdata(sorteddata);
  }

  const descendingData = () => {
    const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setdata(sortedData);
  };

  const Previous = () => {
    loaduser();
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="mx-auto w-full max-w-7xl px-4 py-4"  >
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or
              delete existing ones.
            </p>
          </div>
          <div>
            <Link to="/create" >
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new employee
              </button>
            </Link>
          </div>
          <div >
            <button
              id="dropdownDefaultButton"
              onClick={toggledropdown}
              className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-blue-800"
              type="button"
            >
              Sort data
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div className='absolute right-5'>
              {dropdownVisible && (
                <div id="dropdown" className="z-[10000] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li onClick={Accendingdata} >
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accending</a>
                    </li>
                    <li onClick={descendingData} >
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</a>
                    </li>
                    <li  onClick={Previous} >
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Previous</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="relative py-3.5 text-left ps-10">Employee</th>
                      <th scope="col" className="relative py-3.5">Title</th>
                      <th scope="col" className="relative py-3.5"> Status</th>
                      <th scope="col" className="relative py-3.5"> Role</th>
                      <th scope="col" className="relative py-3.5 text-end pe-10">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((cvalue, index, arr) => (
                      <tr className='' key={index}>
                        <td className=" whitespace-nowrap py-4 ps-8 ">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img src={cvalue.img} style={{ borderRadius: "100%", height: "40px", width: "40px", backgroundPosition: "center", objectFit: "cover" }} alt="employee" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {cvalue.name}
                              </div>
                              <div className="text-sm text-gray-700">{cvalue.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{cvalue.title}</div>
                          <div className="text-sm text-gray-700">Engineering</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <button onClick={() => {removeitem(cvalue.id)}}>
                          {/* <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800" > */}
                            Remove
                          {/* </span> */}
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {cvalue.role}
                        </td>
                        <td className="whitespace-nowrap px-10 py-4 -z-20 text-right text-sm font-medium">
                          <Link to="/create" className="text-gray-700">
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
