import React from 'react'
import logo from '../assets/logo.png'
import './header.css'

export default function Header() {
  return (
    <>
      <div className='container grid-cols-2 gap-5 pt-7 grid-rows-1 mx-auto flex justify-between px-7'>
        <div className='logo-div col '><img src={logo} alt="" /></div>
        <div className='flex' >
          <div>
            <form action="#">
              <div class="search-info p-relative rounded">
                <button class="header-search-icon">
                  <i class="fa-solid fa-magnifying-glass" style={{ color: "#5d5f5f", paddingRight: "7px" }}></i>
                </button>
                <input placeholder="Search products..." type="text" />
              </div>
            </form>
          </div>
          <div className='three-cart' >
            <div className="f-selector">
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  )
}


