import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setdata] = useState([]);

  const loaduser = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setdata(response.data);
  }

  useEffect(() => {
    loaduser()
  }, []);

  const ondelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`)
    .then((response) => {
      loaduser();
    })
    .catch((error) => {
      // console.log(error, "error");
    })
  }

  return (
    <div>
      <div className='mt-10 ms-10 mb-0' >
        <Link to="/create" >
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add new employee
          </button>
        </Link>
      </div>
      <div class="relative mx-10 overflow-x-auto">
        <table class="w-full mt-10  text-sm text-left rtl:text-right text-white dark:text-white">
          <thead class=" text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <Link to="/edit" >
              <th scope="col" class="px-6 py-3">
                Edit
              </th>
              </Link>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index, arr) => {
              return (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                      {value.name}
                    </th>
                    <td class="px-6 py-4">
                    <Link to={`/edit/${value.id}`} >
                      Edit
                    </Link>
                    </td>
                    <td class="px-6 py-4">
                      {value.category}
                    </td>
                    <button onClick={() => ondelete(value.id)} >
                    <td class="px-6 py-4">
                      Remove
                    </td>
                    </button>
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
