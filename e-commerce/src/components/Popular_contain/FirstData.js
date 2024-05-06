import React from 'react'
import Pageheading from '../Commancomponents/Pageheading/Pageheading'
import Header2 from '../Commancomponents/2_Header2/Header2'
import i1 from '../assets/i1.jpg';
import { useParams } from 'react-router-dom';
import data from '../0_Home/5_Poular_products/Data2';


export default function FirstData(props) {
    let { id } = useParams(); // Retrieve ID from URL
    let product = data.find((item) => item.id === parseInt(id)); // Find product by ID
console.log(product,"product")

    return (
    
        <div className='mt-[2rem] relative' >
            <Header2 />
            <Pageheading pagename="Shop Details" />

        <div className='flex h-[50vh] mt-[5rem] mx-5 justify-center' >
            <div className='h-[10rem] w-[20rem] ' >
            <img src={product.img} alt="product_image" />
            </div>
            <div>
                {props.name}
                <h1 className='font-bold ms-[5rem] text-[2rem] ' >{product.name}</h1>
                {/* <del className='text-gray-500 font-bold text-[1.5rem] ms-[5rem]'>$9.28</del> */}
                <div className='text-gray-500 font-bold text-[1.5rem] ms-[5rem]'>{product.price}</div>
                <p className='w-[20vw]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit est temporibus ea unde voluptatem accusantium natus, fuga nisi qui voluptas dolorum quaerat nostrum repellat error sint animi sequi. Fuga.</p>
            </div>

        </div>

        </div>
    )
}


