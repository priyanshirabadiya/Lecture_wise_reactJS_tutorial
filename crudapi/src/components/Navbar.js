import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (    
        <>
            <nav class="bg-black border-gray-200 dark:bg-black dark:border-gray-400">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Holders</span>
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
                            <li>
                                <Link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:bg-transparent" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/create" >
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Create </button>
                                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/edit/:id" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Edit</Link>
                            </li>
                            <li>
                                <Link to="/signin" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</Link>
                            </li>
                            <li>
                                <Link to="/login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



// import React from 'react'
// import { Link } from 'react-router-dom';
// import bg from './backg.png';

// export default function Navbar() {
//     return (
//         <div>
//             <div class="relative w-full bg-gray-600 p-3">
//                 <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
//                     <div class="inline-flex items-center space-x-2">
//                         <span className='' >
//                             <img src={bg} height={50} width={30} alt="" />
//                         </span>
//                         <span class="font-bold">DevUI</span>
//                     </div>
//                     <div class="hidden grow items-start lg:flex">
//                         <ul class="ml-12 inline-flex space-x-8">
//                             <li>
//                                 <Link
//                                     to="/"
//                                     class="inline-flex items-center text-sm font-semibold text-white hover:text-gray-900"
//                                 >
//                                 Home
//                                     <span>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             class="ml-2 h-4 w-4"
//                                         >
//                                             <polyline points="6 9 12 15 18 9"></polyline>
//                                         </svg>
//                                     </span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#"
//                                     class="inline-flex items-center text-sm font-semibold text-white hover:text-gray-900"
//                                 >
//                                     About
//                                     <span>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             class="ml-2 h-4 w-4"
//                                         >
//                                             <polyline points="6 9 12 15 18 9"></polyline>
//                                         </svg>
//                                     </span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#"
//                                     class="inline-flex items-center text-sm font-semibold text-white hover:text-gray-900"
//                                 >
//                                     Contact
//                                     <span>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             class="ml-2 h-4 w-4"
//                                         >
//                                             <polyline points="6 9 12 15 18 9"></polyline>
//                                         </svg>
//                                     </span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div class="hidden space-x-2 lg:block">
//                         <Link to="/signin">
//                         <button
//                             type="button"
//                             class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Sign In
//                         </button>
//                         </Link>
//                         <button
//                             type="button"
//                             class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Log In
//                         </button>
//                     </div>
//                     <div class="lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             class="h-6 w-6 cursor-pointer"
//                         >
//                             <line x1="4" y1="12" x2="20" y2="12"></line>
//                             <line x1="4" y1="6" x2="20" y2="6"></line>
//                             <line x1="4" y1="18" x2="20" y2="18"></line>
//                         </svg>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

