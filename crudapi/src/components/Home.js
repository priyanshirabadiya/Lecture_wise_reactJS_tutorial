import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const loadUser = async () => {
    try {
      const res = await axios.get('http://localhost:3001/users');
      setData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      loadUser();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const ascendingData = () => {
    const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(sortedData);
  };

  const descendingData = () => {
    const sortedData = [...filteredData].sort((a, b) => b.name.localeCompare(a.name));
    setFilteredData(sortedData);
  };

  const previousData = () => {
    loadUser();
  };

  const handleSearch = (searchTerm) => {
    const results = data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
    setCurrentPage(1); // Reset to the first page when a new search is performed
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or
              delete existing ones.
            </p>
          </div>
          <div>
            <Link to="/create">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new employee
              </button>
            </Link>
          </div>
          <div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-blue-800"
              type="button"
            >
              Sort data
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div className="absolute right-5">
              {dropdownVisible && (
                <div id="dropdown" className="z-[10000] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li onClick={ascendingData}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ascending</a>
                    </li>
                    <li onClick={descendingData}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</a>
                    </li>
                    <li onClick={previousData}>
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
                      <th scope="col" className="relative py-3.5">Status</th>
                      <th scope="col" className="relative py-3.5">Role</th>
                      <th scope="col" className="relative py-3.5 text-end pe-10">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {records.map((cvalue) => (
                      <tr key={cvalue.id}>
                        <td className="whitespace-nowrap py-4 ps-8">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img src={cvalue.img} style={{ borderRadius: '100%', height: '40px', width: '40px', backgroundPosition: 'center', objectFit: 'cover' }} alt="employee" />
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
                          <div className="text-sm text-gray-900">{cvalue.title}</div>
                          <div className="text-sm text-gray-700">Engineering</div>
                        </td>
                        <td>
                        <Link to={`/edit/${cvalue.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-sm text-gray-500">{cvalue.role}</td>
                        <td className="relative flex justify-end space-x-3 py-4 pe-8 text-right text-sm font-medium">
                           <button className="text-red-600 hover:text-red-900" onClick={() => removeItem(cvalue.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <nav aria-label="Page navigation example" className="mt-4 flex justify-end">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-black" onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </button>
            </li>
            {pageNumbers.map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`px-3 py-1 text-sm ${pageNumber === currentPage ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                  onClick={() => changeCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            <li>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-black" onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

