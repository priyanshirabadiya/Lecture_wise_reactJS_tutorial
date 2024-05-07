import React from 'react'
import Pageheading from '../Commancomponents/Pageheading/Pageheading'
import Header2 from '../Commancomponents/2_Header2/Header2'
import i1 from '../assets/i1.jpg';
import { useParams } from 'react-router-dom';
import data from '../0_Home/5_Poular_products/Data2';
import { CiHeart } from "react-icons/ci";

export default function FirstData(props) {
    let { id } = useParams(); // Retrieve ID from URL
    let product = data.find((item) => item.id === parseInt(id)); // Find product by ID
    console.log(product, "product")
    return (
        <div className='mt-[2rem] relative' >
            <Header2 />
            <Pageheading pagename="Shop Details" />

            <div className='flex mt-[5rem] mx-5 justify-center flex-wrap' >
                <div className='' >
                    <img src={product.img} className='h-[20rem] w-[20rem] ' alt="product_image" />
                </div>
                <div className='mt-10' >
                    {props.name}
                    <h1 className='font-bold ms-[5rem] text-[2rem] ' >{product.name}</h1>
                    {/* <del className='text-gray-500 font-bold text-[1.5rem] ms-[5rem]'>$9.28</del> */}
                    <div className=' font-bold text-[1.5rem] ms-[5rem] text-[#d51243] '>{product.price}</div>
                    <p className='w-[30vw] text-gray-500 ms-[5rem] ' >Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a completely modern design and you feel comfortable to put on this hijab. Buy it at the best price.</p>
                    <form action="">
                        <div className="flex">
                            <div className='border py-2 w-[15vw] mt-6 ms-[5rem] flex justify-center rounded '>
                                <input type="number" defaultValue={1} className='outline-none border-none focus:border-none mx-2' />
                            </div>
                            <div className=' items-center text-center' >
                                <button type='submit' className='p-0 mt-6 ms-4 px-10 bg-[#D51243] h-[3.1rem] items-center w-[10rem] text-white rounded ' >Add to cart</button>
                            </div>
                            <div className='mt-6 p-5 py-0 ms-5 flex items-center border ' >
                                <CiHeart className='h-6 w-6 ' />
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}


