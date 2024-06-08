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
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(REMOVE(id));
        toast.error("Removed from cart!");
    };

    const changeQuantity = (event, id) => {
        const quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, quantity));
    };

    let Subtotal = 0;
    data.forEach((item) => {
        const quantity = quantities[item.id] || 1;
        Subtotal += item.price * quantity;
    });

    const Taxes = 9.00;

    return (
        <>
            <Header2 />
            <Pageheading pagename="Cart" />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            <div className="overflow-x-auto w-full mt-12 mb-12">
                <table className="table-auto w-full min-w-[800px]">
                    <thead>
                        <tr className="border">
                            <th className="border py-3">Image</th>
                            <th className="border py-3">Courses</th>
                            <th className="border py-3">Unit Price</th>
                            <th className="border py-3">Quantity</th>
                            <th className="border py-3">Total</th>
                            <th className="border py-3">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => {
                            const { name, price, img, id } = product;
                            const quantity = quantities[id] || 1;
                            const totalPrice = quantity * price;
                            return (
                                <tr key={id} className="border">
                                    <td className="flex justify-center py-3">
                                        <img src={img} alt={name} height={130} width={130} />
                                    </td>
                                    <td className="border text-center px-4">{name}</td>
                                    <td className="border text-center px-4">${price}.00</td>
                                    <td className="border text-center px-4">
                                        <input
                                            onChange={(event) => changeQuantity(event, id)}
                                            type="number"
                                            name="number"
                                            defaultValue={quantity}
                                            className="outline-none input-number w-full text-center"
                                            min="1"
                                        />
                                    </td>
                                    <td className="border text-center px-4">${totalPrice.toFixed(2)}</td>
                                    <td className="text-center px-4">
                                        <button onClick={() => remove(id)}>Remove</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {data.length === 0 && (
                <div className='flex justify-center mt-5 align-middle w-full'>
                    <h1 className='mt-3 text-[1.2rem] me-5'>Cart is empty</h1>
                    <Link className="banner-animation p-4 px-10 bg-[#D51243] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]" to="/">Go to home</Link>
                </div>
            )}

            {/* Cupon and total part */}
            <form action="">
                <div className="flex justify-between flex-wrap mt-[2rem] mx-10">
                    <div className="flex flex-wrap ">
                        <button className='p-3 border'>
                            <input type="text" placeholder='Coupon code' />
                        </button>
                        <div className='mt-[0.7rem] ms-2'>
                            <Link className="banner-animation bg-[#D51243] h-[3rem] p-4 px-8 items-center w-[10rem] text-white rounded text-[0.8rem] font-bold" to="/checkout">Apply coupon</Link>
                        </div>
                    </div>
                    <div>
                        <div className='mt-10 sm:mt-0 sm:ms-0 ms-2'>
                            <Link className="banner-animation p-5 px-10 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]" to="">Update cart</Link>
                        </div>
                    </div>
                </div>
            </form>
            <div className='mx-10 mt-10 flex relative justify-center h-60 sm:justify-end'>
                <div className='w-[30vw]'>
                    <h2 className='text-[1.3rem]'>Cart Totals</h2>
                    <div className='border ps-2 pt-2 w-[30vw] pe-2 absolute flex justify-between sm:px-5 sm:py-3 '>
                        <div className='text-[0.9rem] text-gray-500'>SubTotal</div>
                        <div className='text-[0.9rem] text-gray-500'>${Subtotal.toFixed(2)}</div>
                    </div>
                    <div className='border ps-2 pt-2 w-[30vw] pe-2 mt-12 absolute border-t-0 flex justify-between sm:px-5 sm:py-3 '>
                        <div className='text-[0.9rem] text-gray-500'>Taxes</div>
                        <div className='text-[0.9rem] text-gray-500'>${(Subtotal * Taxes / 100).toFixed(2)}</div>
                    </div>
                    <div className='border ps-2 pt-2 w-[30vw] pe-2 mt-24 absolute border-t-0 flex justify-between sm:px-5 sm:py-3 '>
                        <div className='text-[0.9rem] text-gray-500'>Total</div>
                        <div className='text-[0.9rem] text-gray-500'>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</div>
                    </div>
                    <div className='mt-48 absolute me-20'>
                        <Link className="tp-btn tp-color-btn banner-animation p-5  bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]" to="/checkout">Proceed to Checkout</Link>
                    </div>
                </div>

            </div>
        </>
    );
}

