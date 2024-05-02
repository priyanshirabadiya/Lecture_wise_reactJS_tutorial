import React from 'react'
import logo from '../assets/logo.png'
import flag from '../assets/flag.png'
import './header.css'
import './responsive.css'

export default function Header() {
  return (
    <>
    <div className='hooter-line h-10 bg-[#F3EEE7] flex items-center'>
    <p className='px-7 text-sm font-bold tracking-[0.5px] '>Welcome to our international shop! Enjoy free shipping on orders $100 up</p>
    <a href="/shop" className='text-sm font-bold text-[#d51243] -ms-4 ' >Shop Now <i className="fa-solid fa-arrow-right" style={{color:"#d51243"}}></i> </a>
    </div>
      <div className='relative flex justify-between mt-5 mx-10 '>
        <div className='logo-div mt-5 flex'>
          <div className='side-icon'>
            <i className="fa-solid fa-bars  fa-lg  "></i>
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
                <a href="#">Arabin</a>
                <a href="#">Spanish</a>
                <a href="#">Mandrain</a>
              </div>
            </div>
            <div className="s-selector">
              <select className='border h-12 rounded ms-3' >
                <option style={{ padding: "50px" }}>USD</option>
                <option style={{ padding: "50px" }}>YEAN</option>
                <option>EURO</option>
              </select>
            </div>
            <div className='mt-3 ms-3'>
              <span className="material-symbols-outlined relative">shopping_cart</span>
              <span className="tp-product-count">2</span>
            </div>
            <div className='ms-3 mt-3 fa-lg' >
              <i className="fa-regular fa-user"></i>
            </div>
            <div className='mt-3 ms-3'>
              <i className="fa-regular fa-heart fa-lg"></i>
              <span className="tp-product-count">1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


