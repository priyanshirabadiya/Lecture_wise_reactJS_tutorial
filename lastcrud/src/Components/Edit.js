import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [edit , seteditdata] = useState({
        name : "",
        cate:""
    })

    const editdata = async () => {
        const response = await axios.get(`http://localhost:3001/users/${id}`)
        seteditdata(response.data);
    }

    const onsubmitedit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,edit)
        navigate('/');
    }

    useEffect(() => {
        editdata();
    },[])

    return (
        <div>
            <div>
                <section>
                    <div class="flex items-center justify-center px-4 py-10 ">
                        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <div class="mb-2 flex justify-center">
                            </div>
                            <h2 class="text-center text-2xl font-bold leading-tight text-black"></h2>
                            <p class="mt-2 text-center text-base text-gray-600">

                                <a
                                    href="#"
                                    title=""
                                    class="font-medium text-black transition-all duration-200 hover:underline text-[1.5rem] "
                                >
                                    Edit data
                                </a>
                            </p>
                            <form action="#" method="POST" onSubmit={onsubmitedit} class="mt-8" >
                                <div class="space-y-5">
                                    <div className='text-center'>
                                        <label for="name" class="text-center font-medium text-gray-900">
                                            Name
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Name"
                                                id="name"
                                                name="name"
                                                onChange={(e) => seteditdata({...edit , name:e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center text-center justify-center">
                                            <label for="text" class="text-base  font-medium text-gray-900">
                                                title
                                            </label>
                                        </div>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-full  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="... title"
                                                id="title"
                                                name="title"
                                                onChange={(e) => seteditdata({...edit , cate:e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Edit data
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="ml-2"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div class="mt-3 space-y-3">
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
