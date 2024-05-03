import React from 'react'
import './style.css'
import Header2 from '../../2_Header2/Header2'
import signinI from '../../assets/signin.jpg'
import signinI2 from '../../assets/signin-2.jpg'
import { FiLock } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";

export default function Sign_in() {
    return (
        <>
            <div>
                <Header2 />
            </div>
            <div>
                <div className="bg-img pb-52 lg:mt-0 xl:-mt-8 w-full bg-no-repeat relative">
                    <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
                        <a href="" className='home' >Home</a>
                        <div className='mt-3 ms-2' >
                            <div className='w-[3vw] border-b-2 border-[#e2e2e2] -me-2' ></div>
                        </div>
                        <p className='text-gray-400' >Sign In</p>
                    </div>
                    <h1 className='top-20 left-10 absolute text-[42px] font-bold'>Sign In</h1>
                </div>
            </div>
            <div className="flex xl:flex-nowrap justify-center xl:justify-between mb-10 flex-wrap mx-10 mt-20">
                <div className="h-[750px] bg-[#F6F6F6] rounded ">
                    <div className=' rounded-t-lg relative' >
                        <img src={signinI} className='rounded-t-lg' alt="" />
                    </div>
                    <div className='pt-10 ps-10 flex' >
                        <div>
                            <button className='p-4 rounded bg-white'><FiLock className='text-[#d12531]' /></button>
                        </div>
                        <div>
                            <div className='ms-2'>
                                <h3 className='font-bold  '>Login Here</h3>
                                <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]' >Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                            </div>
                            <div className=' bg-white py-1 mt-5 rounded flex -ms-12' >
                                <LuUser2 className='m-4 me-0 text-gray-500 ' />
                                <input type="text" className='px-2 pe-72 py-3 focus:border-none ' placeholder='Username/email address' />
                            </div>
                            <div className=' bg-white py-1 mt-3 rounded flex -ms-12' >
                                <GoKey className='m-4 me-0 text-gray-500 ' />
                                <input type="text" className='px-2 pe-72 py-3 focus:border-none ' placeholder='Password' />
                            </div>
                            <div className="flex mt-5 justify-between -ms-12 n-check">
                                <div className='' >
                                    <input type="checkbox" className='h-3 w-3' id='check' />
                                    <label htmlFor="check" className='ms-2 text-sm text-gray-500'>Remember me</label>
                                </div>
                                <a href="" className='underline text-[0.75rem] mt-2' >Forget password</a>
                            </div>
                            <div className=' bg-[#d51243] py-4 text-white rounded mt-5 flex -ms-12 hover:bg-[#b1101a]
                                hover:transition-all hover:duration-500 hover:ease-in-out
                            justify-center cursor-pointer' >
                                <button>Login Now </button><FaArrowRightLong className='mt-1 ms-2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[750px] bg-[#F6F6F6] rounded md:mt-10 lg:mt-0 ">
                    <div className=' rounded-t-lg relative' >
                        <img src={signinI2} className='rounded-t-lg' alt="" />
                    </div>
                    <div className='pt-10 ps-10 flex' >
                        <div>
                            <button className='p-4 rounded bg-white'><TbShoppingBagMinus className='text-[#d12531]' /></button>
                        </div>
                        <div>
                            <div className='ms-2'>
                                <h3 className='font-bold  '>Sign Up</h3>
                                <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]' >Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                            </div>
                            <div className=' bg-white py-1 mt-5 rounded flex -ms-12 ' >
                                <CiMail className='m-4 me-0 ' />
                                <input type="text" className='px-2 pe-72 py-3 focus:border-none ' placeholder='Username/email address' />
                            </div>
                            <div className=' bg-white py-1 mt-3 rounded flex -ms-12' >
                                <GoKey className='m-4 me-0 text-gray-500 ' />
                                <input type="text" className='px-2 pe-72 py-3 focus:border-none ' placeholder='Password' />
                            </div>
                            <div className="flex mt-5 justify-between -ms-12 n-check">
                                <a href="" className='underline text-[0.75rem] mt-2' >Already Have Account?</a>
                            </div>
                            <div className=' bg-[#F3EEE7] py-4  rounded mt-5 flex -ms-12 hover:bg-[black] hover:text-white
                                hover:transition-all hover:duration-500 hover:ease-in-out justify-center'>
                                <button>Login Now </button><IoIosArrowRoundForward className='mt-1 ms-2 h-7 w-6' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
