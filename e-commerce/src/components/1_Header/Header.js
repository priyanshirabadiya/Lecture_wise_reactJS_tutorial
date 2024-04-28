import React from 'react'
import logo from '../assets/logo.png'
import flag from '../assets/flag.png'
import './header.css'
import './responsive.css'

export default function Header() {
  return (
    <>
      <div className='container grid-cols-2 gap-5 pt-7 grid-rows-1 mx-auto flex justify-between px-7'>
        <div className='logo-div flex justify-between'>
          <div className='side-icon'>
            <i className="fa-solid fa-bars  absolute fa-lg top-14 "></i>
          </div>
          <div>
            <img src={logo} alt="" className='absolute top-9' />
          </div>
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
                <option style={{padding:"50px"}}>USD</option>
                <option style={{padding:"50px"}}>YEAN</option>
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


