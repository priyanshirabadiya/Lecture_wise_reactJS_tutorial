// import React, { useState, useEffect } from 'react'
// import Pageheading from '../../Commancomponents/Pageheading/Pageheading'
// import Header2 from '../../Commancomponents/2_Header2/Header2'
// import { useSelector, useDispatch } from 'react-redux';
// import { REMOVE } from '../../../Redux/Action/Action';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// export default function Cart() {
//     const data = useSelector((state) => state.cartreducer.carts)
//     // console.log(data,"datanew");

//     let input = document.querySelector('.input-number');
//     let multians = document.querySelector('.t-price')
//     function updateOpt() {
//         let ans = input.value;
//         let mul = ans * 20;
//         multians.innerHTML = mul;
//     }

//     input.addEventListener('input', updateOpt);

//     const dispatch = useDispatch();
//     const remove = (id) => {
//         dispatch(REMOVE(id));
//         toast.error("Removed from cart!");
//     };

//     return (
//         <>

//             <Header2 />
//             <Pageheading pagename="Cart" />
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="colored"
//             />
//             <table class="table-auto mt-[3rem] mb-[3rem] overflow-x-scroll w-full">

//                 <thead>
//                     <tr className='border' >
//                         <th className='border py-3' >Image</th>
//                         <th className='border py-3' >Courses</th>
//                         <th className='border py-3' >Unit Price</th>
//                         <th className='border py-3' >Quantity</th>
//                         <th className='border py-3' >Total</th>

//                         <th className='border py-3' >Remove</th>
//                     </tr>
//                 </thead>
//                 {data.length > 0 ? (
//                     <tbody>
//                         {data.map((cvalue) => {
//                             const { name, price, img, id } = cvalue.value;
//                             return (
//                                 <tr key={id} className='border'>
//                                     <td className='flex justify-center'>
//                                         <img src={img} alt="" height={130} width={130} className='py-3' />
//                                     </td>
//                                     <td className='border w-[10rem] text-center mx-[25rem]'>{name}</td>
//                                     <td className='border text-center'>{price}</td>
//                                     <td className='border items-center w-[12rem]'>
//                                         <div className='border py-4 mx-[4rem] flex justify-center rounded'>
//                                             <input type="number" name="numberadded" defaultValue={1} className='outline-none input-number border-none focus:border-none mx-2' />
//                                         </div>
//                                     </td>
//                                     <td className='border text-center t-price '>{price}</td>

//                                     <td className='text-center'>
//                                         <button onClick={() => remove(id)}>Remove</button>
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 ) :
//                     (
//                         <tbody className='' >
//                             <tr className=''>
//                                 <td colSpan="7" className="text-center ">
//                                     <div className='flex justify-center mt-5 align-middle w-full'>
//                                         <h1 className='mt-3 text-[1.2rem] me-5'>Cart is empty</h1>
//                                         <a href="/">
//                                             <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[15rem] text-white rounded'>
//                                                 Go to home
//                                             </button>
//                                         </a>
//                                     </div>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     )}
//             </table>

//             <form action="">
//                 <div className="flex justify-between mt-[2rem] mx-10 ">
//                     <div className="flex ">
//                         <button className='p-3 border'>
//                             <input type="text" placeholder='Coupon code' />
//                         </button>
//                         <div className='' >
//                             <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded ' >Apply coupon</button>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='' >
//                             <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]' >Update cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//             <div className=' mx-10 mt-10 flex justify-end' >
//                 <div className='w-[30vw]' >
//                     <h2 className='text-[1.3rem]' >Cart Totals</h2>
//                     <form action="">
//                         <div className='border flex justify-between px-5 py-3' >
//                             <div className='text-[0.9rem] text-gray-500 '>SubTotal</div>
//                             <div className='text-[0.9rem] text-gray-500 '>$40.00</div>
//                         </div>
//                         <div className='border border-t-0 flex justify-between px-5 py-3' >
//                             <div className='text-[0.9rem] text-gray-500 '>
//                                 Total</div>
//                             <div className='text-[0.9rem] text-gray-500 '>$40.00</div>
//                         </div>
//                         <div className='mt-[1rem]' >
//                             <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]' >Proceed to Checkout</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// ---------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
// import Header2 from '../../Commancomponents/2_Header2/Header2';
// import { useSelector, useDispatch } from 'react-redux';
// import { REMOVE } from '../../../Redux/Action/Action';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Cart() {
//     const data = useSelector((state) => state.cartreducer.carts);
//     const dispatch = useDispatch();
//     const remove = (id) => {
//         dispatch(REMOVE(id));
//         toast.error("Removed from cart!");
//     };
//     const getvalue = () => {
//         let value = document.querySelector('.t-price')
//         console.log(value);
//     } 

//     return (
//         <>
//             <Header2 />
//             <Pageheading pagename="Cart" />
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="colored"
//             />
//             <table className="table-auto mt-[3rem] mb-[3rem] overflow-x-scroll w-full">
//                 <thead>
//                     <tr className='border'>
//                         <th className='border py-3'>Image</th>
//                         <th className='border py-3'>Courses</th>
//                         <th className='border py-3'>Unit Price</th>
//                         <th className='border py-3'>Quantity</th>
//                         <th className='border py-3'>Total</th>
//                         <th className='border py-3'>Remove</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((cvalue, index) => {
//                         const { name, price, img, id } = cvalue.value;

//                         return (
//                             <tr key={id} className='border'>
//                                 <td className='flex justify-center'>
//                                     <img src={img} alt="" height={130} width={130} className='py-3' />
//                                 </td>
//                                 <td className='border w-[10rem] text-center mx-[25rem]'>{name}</td>
//                                 <td className='border text-center'>{price}</td>
//                                 <td className='border items-center w-[12rem]'>
//                                     <div className='border py-4 mx-[4rem] flex justify-center rounded'>
//                                         <input
//                                             type="number"
//                                             defaultValue={1}
//                                             name="number"
//                                             className='outline-none input-number border-none focus:border-none mx-2'
//                                         />
//                                     </div>
//                                 </td>
//                                 <td className='border text-center t-price' onClick={() => {getvalue}} >{price}</td>
//                                 <td className='text-center'>
//                                     <button onClick={() => remove(id)}>Remove</button>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//             {data.length === 0 && (
//                 <div className='flex justify-center mt-5 align-middle w-full'>
//                     <h1 className='mt-3 text-[1.2rem] me-5'>Cart is empty</h1>
//                     <a href="/">
//                         <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[15rem] text-white rounded'>
//                             Go to home
//                         </button>
//                     </a>
//                 </div>
//             )}
//             <form action="">
//                 <div className="flex justify-between mt-[2rem] mx-10">
//                     <div className="flex">
//                         <button className='p-3 border'>
//                             <input type="text" placeholder='Coupon code' />
//                         </button>
//                         <div>
//                             <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded'>Apply coupon</button>
//                         </div>
//                     </div>
//                     <div>
//                         <div>
//                             <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]'>Update cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//             <div className='mx-10 mt-10 flex justify-end'>
//                 <div className='w-[30vw]'>
//                     <h2 className='text-[1.3rem]'>Cart Totals</h2>
//                     <div className='border flex justify-between px-5 py-3'>
//                         <div className='text-[0.9rem] text-gray-500'>SubTotal</div>
//                         <div className='text-[0.9rem] text-gray-500'>$40.00</div>
//                     </div>
//                     <div className='border border-t-0 flex justify-between px-5 py-3'>
//                         <div className='text-[0.9rem] text-gray-500'>Total</div>
//                         <div className='text-[0.9rem] text-gray-500'>$40.00</div>
//                     </div>
//                     <div className='mt-[1rem]'>
//                         <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]'>Proceed to Checkout</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



import React from 'react';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import Header2 from '../../Commancomponents/2_Header2/Header2';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE } from '../../../Redux/Action/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
    const data = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(REMOVE(id));
        toast.error("Removed from cart!");
    };

    const getvalue = (event, price) => {
        const row = event.currentTarget.closest('tr'); // Find the closest 'tr' element
        const quantityInput = row.querySelector('input[name="number"]'); // Find the input field within the same row
        const quantity = quantityInput.value; // Get the value of the input field
        console.log('Price:', price, 'Quantity:', quantity); // Print the price and quantity
    }
    
    return (
        <>
            <Header2 />
            <Pageheading pagename="Cart" />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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

                        return (
                            <tr key={id} className='border'>
                                <td className='flex justify-center'>
                                    <img src={img} alt="" height={130} width={130} className='py-3' />
                                </td>
                                <td className='border w-[10rem] text-center mx-[25rem]'>{name}</td>
                                <td className='border text-center'>{price}</td>
                                <td className='border items-center w-[12rem]'>
                                    <div className='border py-4 mx-[4rem] flex justify-center rounded'>
                                        <input
                                            type="number"
                                            defaultValue={1}
                                            name="number"
                                            className='outline-none input-number border-none focus:border-none mx-2'
                                        />
                                    </div>
                                </td>
                                <td className='border text-center t-price' onClick={(event) => getvalue(event, price)}>{price}</td>
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
                    <a href="/">
                        <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[15rem] text-white rounded'>
                            Go to home
                        </button>
                    </a>
                </div>
            )}
            <form action="">
                <div className="flex justify-between mt-[2rem] mx-10">
                    <div className="flex">
                        <button className='p-3 border'>
                            <input type="text" placeholder='Coupon code' />
                        </button>
                        <div>
                            <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded'>Apply coupon</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]'>Update cart</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className='mx-10 mt-10 flex justify-end'>
                <div className='w-[30vw]'>
                    <h2 className='text-[1.3rem]'>Cart Totals</h2>
                    <div className='border flex justify-between px-5 py-3'>
                        <div className='text-[0.9rem] text-gray-500'>SubTotal</div>
                        <div className='text-[0.9rem] text-gray-500'>$40.00</div>
                    </div>
                    <div className='border border-t-0 flex justify-between px-5 py-3'>
                        <div className='text-[0.9rem] text-gray-500'>Total</div>
                        <div className='text-[0.9rem] text-gray-500'>$40.00</div>
                    </div>
                    <div className='mt-[1rem]'>
                        <button type='submit' className='p-0 bg-[#D51243] h-[3rem] items-center font-bold w-[10rem] text-white rounded text-[0.8rem]'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}
