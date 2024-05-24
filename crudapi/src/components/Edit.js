import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios";

export default function Edit() {
  const [data, setdata] = useState([]);

  const loaduser = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setdata(res.data);
    // setdata(res);
    // console.log(res , "res"); //in this you will find data in this field
    console.log(res.data, "res"); // so we find data from this perticular filed
  }
  useEffect(() => {
    loaduser();
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section class="mx-auto w-full max-w-7xl px-4 py-4">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 class="text-lg font-semibold">Employees</h2>
            <p class="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or
              delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="relative py-3.5 text-left ps-10">Employee</th>
                      <th scope="col" class="relative py-3.5">Title</th>
                      <th scope="col" class="relative py-3.5" > Status</th>
                      <th scope="col" class="relative py-3.5" > Role</th>
                      <th scope="col" class="relative py-3.5 text-end pe-10">Edit</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    {data.map((cvalue, index, arr) => (
                      <tr className=''>
                        <td class=" whitespace-nowrap py-4 ps-8 ">
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex-shrink-0"  >
                              <img src={cvalue.img} style={{ borderRadius: "100%", height: "40px", width: "40px", backgroundPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                {cvalue.name}
                              </div>
                              <div class="text-sm text-gray-700">{cvalue.email}</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-12 py-4">
                          <div class="text-sm text-gray-900 ">{cvalue.title}</div>
                          <div class="text-sm text-gray-700">Engineering</div>
                        </td>
                        <td class="whitespace-nowrap px-4 py-4">
                          <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Remove
                          </span>
                        </td>
                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {cvalue.role}
                        </td>
                        <td class="whitespace-nowrap px-10 py-4 text-right text-sm font-medium">
                          <a href="#" class="text-gray-700">
                            Edit
                          </a>
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
