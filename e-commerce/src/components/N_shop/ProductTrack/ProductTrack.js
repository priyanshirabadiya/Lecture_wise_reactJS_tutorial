import React from 'react'
import './style.css';
import Header2 from '../../2_Header2/Header2';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import i from '../../assets/track.jpg'


const ProductTrack = () => {
    return (
        <div>
            <Header2 />
            <div>
                <div className="bg-img pb-52 lg:mt-0 xl:-mt-8 w-full bg-no-repeat relative">
                    <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
                        <a href="" className='home' >Home</a>
                        <div className='mt-3 ms-2' >
                            <div className='w-[3vw] border-b-2 border-[#e2e2e2] -me-2' ></div>
                        </div>
                        <p className='text-gray-400' >Track</p>
                    </div>
                    <h1 className='top-20 left-10 absolute text-[42px] font-bold'>Track</h1>
                </div>
            </div>

            <div className="flex justify-center mt-14">
                <div className="h-[750px] bg-[#F6F6F6] rounded ">
                    <div className=' rounded-t-lg relative' >
                        <img src={i} className='rounded-t-lg' alt="" />
                    </div>
                    <div className='pt-10  flex justify-center ' >
                        <div>
                            <button className='p-4 rounded bg-white'><CiDeliveryTruck className='text-[#d12531]' /></button>
                        </div>
                        <div>
                            <div className='ms-2'>
                                <h3 className='font-bold  '>Track Your Order</h3>
                                <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]' >To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                            </div>
                            <div className=' bg-white py-1 mt-5 rounded flex -ms-12' >
                                <FaRegAddressCard  className='m-4 me-0 text-gray-500 ' />
                                <input type="text" className='px-2 pe-72 py-3 focus:border-none ' placeholder='Order ID' />
                            </div>
                            <div className=' bg-white py-1 mt-3 rounded flex -ms-12' >
                                <CiMail  className='m-4 me-0 text-gray-500 ' />
                                <input type="text" className='px-2 pe-72 py-3 focus:border-none ' placeholder='Billing email' />
                            </div>
                            <div className=' bg-[#d51243] py-4 text-white rounded mt-5 flex -ms-12 hover:bg-[#b1101a]
                                hover:transition-all hover:duration-500 hover:ease-in-out
                            justify-center cursor-pointer' >
                                <button>Track Now </button><FaArrowRightLong className='mt-1 ms-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductTrack
