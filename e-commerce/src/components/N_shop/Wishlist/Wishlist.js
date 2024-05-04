import React from 'react'
import './style.css'
import Header2 from '../../2_Header2/Header2';

return (
    <div>
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
                    <p className='text-gray-400' >Wishlist</p>
                </div>
                <h1 className='top-20 left-10 absolute text-[42px] font-bold'>Wishlist</h1>
            </div>
        </div>
    </div>
)

export default Wishlist;
