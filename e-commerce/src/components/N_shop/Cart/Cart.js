import React from 'react'
import Pageheading from '../../Commancomponents/Pageheading/Pageheading'
import Header2 from '../../Commancomponents/2_Header2/Header2'

export default function Cart() {
    return (
        <>
            <Header2 />
            <Pageheading pagename="Cart" />
            <form action="">
                <div className="flex justify-between mt-[2rem] mx-10 ">
                    <div className="flex ">
                        <button className='p-3 border'>
                            <input type="text" placeholder='Coupon code' />
                        </button>
                        <div className='' >
                            <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded ' >Apply coupon</button>
                        </div>
                    </div>
                    <div>
                        <div className='' >
                            <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]' >Update cart</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className=' mx-10 mt-10 flex justify-end' >
                <div className='w-[30vw]' >
                    <h2 className='text-[1.3rem]' >Cart Totals</h2>
                    <form action="">
                        <div className='border flex justify-between px-5 py-3' >
                            <div className='text-[0.9rem] text-gray-500 '>SubTotal</div>
                            <div className='text-[0.9rem] text-gray-500 '>$40.00</div>
                        </div>
                        <div className='border border-t-0 flex justify-between px-5 py-3' >
                            <div className='text-[0.9rem] text-gray-500 '>
                                Total</div>
                            <div className='text-[0.9rem] text-gray-500 '>$40.00</div>
                        </div>
                        <div className='mt-[1rem]' >
                            <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]' >Proceed to Checkout</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
