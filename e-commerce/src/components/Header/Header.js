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
              <div class="search-info p-relative">
                <button class="header-search-icon">
                  <i class="fal fa-search"></i>
                </button>
                <input placeholder="Search products..." type="search" />
              </div>
            </form>
          </div>
          <div>sdf</div>
        </div>
      </div>
    </>
  )
}


