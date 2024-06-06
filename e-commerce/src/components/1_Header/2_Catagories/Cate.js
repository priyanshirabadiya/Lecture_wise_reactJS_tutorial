import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
export default function Cate() {
    const [menuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            <div className='container ps-7 mt-5'>
                <div className="main-c" tabIndex="0" onClick={toggleMenu}>
                    <div className="flex ps-5 pt-3 cursor-pointer ">
                        <i className="fa-solid fa-bars pe-3 pt-1" style={{ color: "#ffffff" }}></i>
                        <b>Categories</b>
                    </div>
                </div>
                <div className={`category-menu border ${menuVisible ? 'category-menu-on' : 'category-menu-off'}`}>
                    <ul>
                        <li className='list-none p-5 cursor-pointer '>
                            <i className="fa-regular fa-user"></i>
                            <Link to="/shop"><span className='p-4 text-sm'>Candles</span></Link>
                        </li>
                        <li className='list-none ps-4 side-dropdown'>
                            <button className="side-dropdown flex">
                                <div>
                                    <span className="material-symbols-outlined icon">
                                        local_florist
                                    </span>
                                    <Link to="/shop"> <span className='handmade text-sm  '>Handmade</span></Link>
                                </div>
                                <div className='right'>
                                    <i className="fa-solid fa-arrow-right fa-sm"></i>
                                </div>
                            </button>
                            <div className="dropdown-content z-50 side-dropdown-content">
                                <Link to="/shop2" >Chair</Link>
                                <Link to="/shop2">Table</Link>
                                <Link to="/shop">Wooden</Link>
                                <Link to="/shop">Furniture</Link>
                                <Link to="/shop">Clock</Link>
                                <Link to="/shop">Gifts</Link>
                                <Link to="/shop">Crafts</Link>
                            </div>
                        </li>
                        <li className='list-none ps-5 pt-3 cursor-pointer'>
                            <i className="fa-regular fa-face-smile " style={{ color: "#d51243" }}></i>
                            <Link to="/shop"> <span className='text-sm ps-2'>Gift Sets</span></Link>
                        </li>
                        <li className='list-none ps-4 pt-5 cursor-pointer'>
                            <span className="material-symbols-outlined icon">footprint</span>
                            <Link to="/shop"> <span className='text-sm ps-3 leading-6 mb-10 absolute'>Plastic Gifts</span></Link>
                        </li>
                        <li className='list-none ps-5 pt-4 cursor-pointer'>
                            <i className="fa-solid fa-futbol" style={{ color: "#d03966" }}></i>
                            <Link to="/shop"><span className='text-sm ps-4'>Handy Cream</span></Link>
                        </li>
                        <li className='list-none ps-5 pt-4 cursor-pointer'>
                            <i className="fa-solid fa-crown" style={{ color: "#d03966" }}></i>
                            <Link to="/shop"><span className='text-sm ps-3'>Cosmetics</span></Link>
                        </li>
                        <li className='list-none ps-5 pt-4 cursor-pointer'>
                            <i className="fa-solid fa-gift" style={{ color: "#d03966" }}></i>
                            <Link to="/shop"> <span className='text-sm ps-3'>Silk Accessories</span></Link>
                        </li>
                    </ul>
                    <div className='links'>
                        <a href=""><b className='mt-3 ms-5 absolute '>Value of the day</b></a>
                        <a href=""><b className='mt-10 ms-5 absolute '>Top 100 Offers </b></a>
                        <a href=""><b className='ms-5 absolute' style={{ marginTop: "67px" }}>New Arrivals</b></a>
                    </div>

                </div>
            </div >

        </>
    )
}
