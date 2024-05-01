import React, { useState } from 'react'
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
                            <span className='p-4 text-sm'>Candles</span>
                        </li>
                        <li className='list-none ps-4 side-dropdown'>
                            <button className="side-dropdown flex">
                                <div>
                                    <span className="material-symbols-outlined icon">
                                        local_florist
                                    </span>
                                    <span className='handmade text-sm  '>Handmade</span>
                                </div>
                                <div className='right'>
                                    <i className="fa-solid fa-arrow-right fa-sm"></i>
                                </div>
                            </button>
                            <div className="dropdown-content z-50 side-dropdown-content">
                                <a href="#">Chair</a>
                                <a href="#">Table</a>
                                <a href="#">Wooden</a>
                                <a href="#">Furniture</a>
                                <a href="#">Clock</a>
                                <a href="#">Gifts</a>
                                <a href="#">Crafts</a>
                            </div>
                        </li>
                        <li className='list-none ps-5 pt-3 cursor-pointer'>
                            <i className="fa-regular fa-face-smile " style={{ color: "#d51243" }}></i>
                            <span className='text-sm ps-4'>Gift Sets</span>
                        </li>
                        <li className='list-none ps-4 pt-5 cursor-pointer'>
                            <span className="material-symbols-outlined icon">footprint</span>
                            <span className='text-sm ps-2 leading-6 mb-10 absolute'>Plastic Gifts</span>
                        </li>
                        <li className='list-none ps-5 pt-4 cursor-pointer'>
                            <i className="fa-solid fa-futbol" style={{ color: "#d03966" }}></i>
                            <span className='text-sm ps-4'>Handy Cream</span>
                        </li>
                        <li className='list-none ps-5 pt-4 cursor-pointer'>
                            <i className="fa-solid fa-crown" style={{ color: "#d03966" }}></i>
                            <span className='text-sm ps-3'>Cosmetics</span>
                        </li>
                        <li className='list-none ps-5 pt-4 cursor-pointer'>
                            <i className="fa-solid fa-gift" style={{ color: "#d03966" }}></i>
                            <span className='text-sm ps-3'>Silk Accessories</span>
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
