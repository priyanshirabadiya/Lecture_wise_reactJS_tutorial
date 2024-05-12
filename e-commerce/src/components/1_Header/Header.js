import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import './header.css';
import './responsive.css';
import Dropdown from '../1_Header/2_Dropdowns/Dropdown';
import { Link } from 'react-router-dom';

import {useSelector} from "react-redux"


export default function Header() {

  const data = useSelector((state) => state.cartreducer.carts)
  console.log(data,"data");


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isSticky ? (
        <div className='mt-3 w-full nav-1 sticky'>
          <div className='flex w-full mx-10 justify-between'>
            <div className='flex '>
              <div className='h-10 mt-2 me-20'>
                <img src={logo} alt="" />
              </div>
              <div className=''><Dropdown /></div>
            </div>
            <div className='flex '>
              <div className='mt-3 ms-3'>
                <Link to="/cart">
                  <span className="material-symbols-outlined relative">shopping_cart</span>
                </Link>
                <span className="tp-product-count">{data.length}</span>
              </div>
              <div className='ms-3 mt-3 fa-lg' >
                <Link to="/signin" >
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
              <div className='mt-3 ms-3'>
                <Link to="/wishlist" >
                  <i className="fa-regular fa-heart fa-lg"></i>
                </Link>

                <span className="tp-product-count">1</span>
              </div>
              <div>
                <div className="search-info-1 p-relative rounded border">
                  <button className="header-search-icon">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: "#5d5f5f", paddingRight: "7px" }}></i>
                  </button>
                  <input placeholder="Search products..." type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :
        <div className='relative flex sec-nav justify-between mt-5 mx-10 nav-2'>
          <div className='logo-div mt-5 flex'>
            <div className='side-icon'>
              <i className="fa-solid fa-bars fa-lg"></i>
            </div>
            <div className='f-icon -mt-1'>
              <img src={logo} alt="" className='top-0 left-0' />
            </div>
          </div>
          <div className='s-icon mt-3'>
            <img src={logo} alt="" className='top-0 left-0' />
          </div>
          <div className='flex' >
            <form action="#">
              <div className="search-info p-relative rounded">
                <button className="header-search-icon">
                  <i className="fa-solid fa-magnifying-glass" style={{ color: "#5d5f5f", paddingRight: "7px" }}></i>
                </button>
                <input placeholder="Search products..." type="text" />
              </div>
            </form>

            <div className='three-cart flex' >
              <div className="dropdown ms-9 border rounded">
                <button className="dropbtn rounded-md flex"> <img src={flag} alt="" /><b>English</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content z-10">
                  <a href="#">Arabic</a>
                  <a href="#">Spanish</a>
                  <a href="#">Mandarin</a>
                </div>
              </div>
              <div className="s-selector">
                <select className='border h-12 rounded ms-3' >
                  <option style={{ padding: "50px" }}>USD</option>
                  <option style={{ padding: "50px" }}>YEN</option>
                  <option>EURO</option>
                </select>
              </div>
              <div className='mt-3 ms-3'>
                <Link to="/cart">
                  <span className="material-symbols-outlined relative">shopping_cart</span>
                </Link>
                <span className="tp-product-count">{data.length}</span>
              </div>
              <div className='ms-3 mt-3 fa-lg' >
                <Link to="/signin" >
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
              <div className='mt-3 ms-3'>
                <Link to="/wishlist" >
                  <i className="fa-regular fa-heart fa-lg"></i>
                </Link>
                <span className="tp-product-count">1</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
