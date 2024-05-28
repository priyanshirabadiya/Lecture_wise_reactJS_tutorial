import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE, UPDATE_QUANTITY } from '../../../Redux/Action/Action';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import Header2 from '../../Commancomponents/2_Header2/Header2';
import './style.css';

export default function Cart() {
    const data = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);
    console.log(quantities , "quntittiessssssss");
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(REMOVE(id));
        toast.error("Removed from cart!");
    };
    // 1st step
    const changeQuantity = (event, id) => {
        const quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, quantity));
    };

    // 2nd step
    let Subtotal = 0;
    data.forEach((item) => {
        const quantity = quantities[item.value.id] || 1;
        Subtotal += item.value.price * quantity;
    });

    const Taxes = 9.00;

    return (
        <>
            <Header2 />
            <Pageheading pagename="Cart" />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            <table className="table-auto mt-[3rem] mb-[3rem] overflow-x-scroll w-full">
                <thead>
                    <tr className='border'>
                        <th className='border py-3'>Image</th>
                        <th className='border py-3'>Courses</th>
                        <th className='border py-3'>Unit Price</th>
                        <th className='border py-3'>Quantity</th>
                        <th className='border py-3'>Total</th>
                        <th className='border py-3'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cvalue) => {
                        const { name, price, img, id } = cvalue.value;
                        const quantity = quantities[id] || 1;
                        const totalPrice = quantity * price;
                        return (
                            <tr key={id} className='border'>
                                <td className='flex justify-center'>
                                    <img src={img} alt={name} height={130} width={130} className='py-3' />
                                </td>
                                <td className='border w-[10rem] text-center mx-[25rem]'>{name}</td>
                                <td className='border text-center'>${price}.00</td>
                                <td className='border items-center w-[12rem]'>
                                    <div className='border py-4 mx-[4rem] flex justify-center rounded'>
                                        <input
                                            onChange={(event) => changeQuantity(event, id)}
                                            type="number"
                                            name="number"
                                            defaultValue={1}
                                            className='outline-none input-number border-none focus:border-none mx-2'
                                            min="1"
                                        />
                                    </div>
                                </td>
                                <td className='border text-center t-price'>${totalPrice.toFixed(2)}</td>
                                <td className='text-center'>
                                    <button onClick={() => remove(id)}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {data.length === 0 && (
                <div className='flex justify-center mt-5 align-middle w-full'>
                    <h1 className='mt-3 text-[1.2rem] me-5'>Cart is empty</h1>
                    <Link className="banner-animation p-4 px-10 bg-[#D51243] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]" to="/">Go to home</Link>
                </div>
            )}
            <form action="">
                <div className="flex justify-between mt-[2rem] mx-10">
                    <div className="flex">
                        <button className='p-3 border'>
                            <input type="text" placeholder='Coupon code' />
                        </button>
                        <div className='mt-[0.7rem] ms-2'>
                            <Link className="banner-animation bg-[#D51243] h-[3rem] p-4 px-8 items-center w-[10rem] text-white rounded text-[0.8rem] font-bold" to="/checkout">Apply coupon</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link className="banner-animation p-5 px-10 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]" to="">Update cart</Link>
                        </div>
                    </div>
                </div>
            </form>
            <div className='mx-10 mt-10 flex justify-end'>
                <div className='w-[30vw]'>
                    <h2 className='text-[1.3rem]'>Cart Totals</h2>
                    <div className='border flex justify-between px-5 py-3'>
                        <div className='text-[0.9rem] text-gray-500'>SubTotal</div>
                        <div className='text-[0.9rem] text-gray-500'>${Subtotal.toFixed(2)}</div>
                    </div>
                    <div className='border border-t-0 flex justify-between px-5 py-3'>
                        <div className='text-[0.9rem] text-gray-500'>Taxes</div>
                        <div className='text-[0.9rem] text-gray-500'>${(Subtotal * Taxes / 100).toFixed(2)}</div>
                    </div>
                    <div className='border border-t-0 flex justify-between px-5 py-3'>
                        <div className='text-[0.9rem] text-gray-500'>Total</div>
                        <div className='text-[0.9rem] text-gray-500'>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</div>
                    </div>
                    <div className='mt-10'>
                        <Link className="tp-btn tp-color-btn banner-animation p-5 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]" to="/checkout">Proceed to Checkout</Link>
                    </div>
                </div>

            </div>
        </>
    );
}
