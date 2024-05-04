import React from 'react'
import Header2 from '../../2_Header2/Header2';
import i1 from '../../assets/i1.jpg'
import i4 from '../../assets/i4.jpg'

const Wishlist = () => {
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
            <div class="overflow-x-scroll">
            <table class="table-auto mt-[5rem] overflow-x-scroll w-full">
                <thead>
                    <tr className='border' >
                        <th className='border py-3 ' >Image</th>
                        <th className='border py-3' >Courses</th>
                        <th className='border py-3' >Unit Price</th>
                        <th className='border py-3' >Quantity</th>
                        <th className='border py-3' >Total</th>
                        <th className='border py-3' >Add To Cart</th>
                        <th className='border py-3' >Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border'>
                        <td className=' flex justify-center' >
                            <img src={i1} alt="" height={130} width={130} className='py-3' />
                        </td>
                        <td className=' border w-[10rem] text-center mx-[25rem]'>Effie Rios</td>
                        <td className='border text-center' >$40</td>
                        <td className='border items-center w-[12rem]' >
                            <div className='border py-4  mx-[4rem] flex justify-center rounded '>
                                <input type="number" defaultValue={1} className='outline-none border-none focus:border-none mx-2' />
                            </div>
                        </td>
                        <td className='border text-center' >$80.00</td>
                        <td className='border items-center text-center' >
                            <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded ' >Add to cart</button>
                        </td>
                        <td className='text-center' >Remove</td>
                    </tr>
                    <tr className='border'>
                        <td className=' flex justify-center' >
                            <img src={i4} className='py-3' alt="" height={130} width={130} />
                        </td>
                        <td className=' border w-[10rem] text-center'>Effie Rios</td>
                        <td className='border text-center' >$40</td>
                        <td className='border items-center w-[12rem]' >
                            <div className='border py-4  mx-[4rem] flex justify-center rounded '>
                                <input type="number" defaultValue={1} className='outline-none border-none focus:border-none mx-2' />
                            </div>
                        </td>
                        <td className='border text-center' >$80.00</td>
                        <td className='border items-center text-center' >
                            <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded ' >Add to cart</button>
                        </td>
                        <td className='text-center' >Remove</td>

                    </tr>

                </tbody>
            </table>
            </div>
        </div>



    )
}

export default Wishlist;
