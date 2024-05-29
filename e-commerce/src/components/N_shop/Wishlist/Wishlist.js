import React from 'react'
import Header2 from '../../Commancomponents/2_Header2/Header2'
import Pageheading from '../../Commancomponents/Pageheading/Pageheading'
import { useSelector, useDispatch } from 'react-redux'
import { ADD, Removewish } from '../../../Redux/Action/Action';
const Wishlist = () => {
    const data = useSelector((state) => state.wishlistreducer1.wish)
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(Removewish(id));
        console.log(data, "wisheddata");
    };

    const send = (id,item) =>{
        dispatch(ADD(item));
        dispatch(Removewish(id));
    };

    return (
        <div>
            <div>
                <Header2 />
            </div>
            <div>
                <Pageheading pagename="Wishlist" />
            </div>
            <div class="overflow-x-scroll">
                <table class="table-auto mt-[5rem] overflow-x-scroll w-full">
                    <thead>
                        <tr className='border' >
                            <th className='border py-3' >Image</th>
                            <th className='border py-3' >Courses</th>
                            <th className='border py-3' >Unit Price</th>
                            <th className='border py-3' >Quantity</th>
                            <th className='border py-3' >Total</th>
                            <th className='border py-3' >Add To Cart</th>
                            <th className='border py-3' >Remove</th>
                        </tr>
                    </thead>
                    {data.length > 0 ? (
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
                                                <input type="number" defaultValue={1} className='outline-none border-none focus:border-none mx-2' />
                                            </div>
                                        </td>
                                        <td className='border text-center'>{price}</td>
                                        <td className='border items-center text-center'>
                                            <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[10rem] text-white rounded'  onClick={() => send(id , cvalue)} >Add to cart</button>
                                        </td>
                                        <td className='text-center cursor-pointer '>
                                            <button onClick={() => remove(id)}>Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    ) :
                        (
                            <tbody className='' >
                                <tr className=''>
                                    <td colSpan="7" className="text-center ">
                                        <div className='flex justify-center mt-5 align-middle w-full'>
                                            <h1 className='mt-3 text-[1.2rem] me-5'>Wishlist is empty</h1>
                                            <a href="/">
                                                <button className='p-0 px-10 bg-[#D51243] h-[3rem] items-center w-[15rem] text-white rounded'>
                                                    Go to home
                                                </button>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                </table>
            </div>
        </div>



    )
}

export default Wishlist;
