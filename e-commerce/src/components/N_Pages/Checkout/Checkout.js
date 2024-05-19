import React from 'react';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import Header2 from '../../Commancomponents/2_Header2/Header2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

export default function Checkout() {
    const cartData = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);

    let Subtotal = 0;
    cartData.forEach((item) => {
        const quantity = quantities[item.value.id] || 1;
        Subtotal += item.value.price * quantity;
    });

    let Taxes = 9.00;
    return (
        <>
            <Header2 />
            <Pageheading pagename="Checkout" />
            <div className="border-4 border-[#F5C9D4] mx-[23%] mt-10">
                <div className='p-5'>
                    <h1 className='text-[2rem] text-[#D51243] '>Your Order</h1>
                    <hr className='mt-2' />
                    <div className='flex mt-3'>
                        <div className='text-[1rem] text-gray-500 w-[50%] font-bold'>Product</div>
                        <div className='text-[1rem] text-gray-500 w-[50%] font-bold'>Total</div>
                    </div>
                    <hr className='mt-3' />
                    {cartData.map((item, index) => (
                        <div key={index}>
                            <div className='flex mt-3'>
                                <div className='text-[1rem] text-gray-500 w-[50%]'>{item.value.name}</div>
                                <div className='text-[1rem] text-gray-500 w-[50%]'>${(item.value.price * (quantities[item.value.id] || 1)).toFixed(2)}</div>
                            </div>
                            <hr className='mt-3' />
                        </div>
                    ))}
                    <div className='flex mt-3'>
                        <div className='text-[1rem] text-gray-500 w-[50%] font-bold '>Order Total price with Tax</div>
                        <div className='text-[1rem] text-gray-500 w-[50%] font-bold '>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</div>
                    </div>
                    <div className='mt-9 mb-5 '>
                        <Link className="banner-animation p-5 px-10 bg-[#D51243] h-[3rem] items-center font-bold text-white rounded text-[0.8rem]" to="/">Place order</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
