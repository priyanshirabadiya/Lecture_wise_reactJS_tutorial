import React from 'react'
import { Link } from 'react-router-dom';
import { IoListOutline } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import './style.css'
import Header2 from '../../2_Header2/Header2'
import Popular_p from './5_Poular_products/Popular_p';

export default function Shop() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="bg-img pb-52 lg:mt-0 xl:-mt-8 w-full bg-no-repeat relative">
        <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
          <a href="" className='home' >Home</a>
          <p className='text-gray-400' >Shop</p>
        </div>
        <h1 className='top-20 left-10 absolute text-[42px] font-bold' >Shop</h1>
      </div>
      <div className="mx-7 mt-10 flex flex-wrap justify-between">
        <div className='flex' >
          <p className='font-bold text-lg'>10</p><span className='font-bold text-gray-500 m-[0.2rem] mt-[0.5px] ' >
            Item On List
          </span>
        </div>
        <div className="select-div flex flex-wrap ">
          <div className="flex md:flex-nowrap ">
            <select name="" id="" className='chosen-single form-select me-5 h-12'>
              <option value="" >Sort by(default)</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
            <select name="" id="" className='chosen-single form-select h-12'>
              <option value="" >All</option>
              <option value="">10 per Page</option>
              <option value="">20 per Page</option>
              <option value="">30 per Page</option>
            </select>
          </div>
          <div className='icon-div'> <a href=""><IoListOutline className='h-6 mt-[12px] w-10 text-[#d12321]' /></a></div>
          <div className='icon-div'> <a href=""><LiaTableSolid className='h-6 mt-[12px] -ms-2 w-10 text-[#3f3e3e] ' /></a></div>
        </div>
      </div>

      <Popular_p/>



      {/* sidebar catagories */}

      {/* <div className='w-[10vw] '>
            <h3 className='font-bold mt-2 ms-5 '>Category</h3><hr className='mt-3 mb-3' />
            <div className='mt-1' >
              <input type='checkbox' name='f-select' id="f-select" /><label className='font-bold text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select' >Kids</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select" /><label className='font-bold text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select' >Mens</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select" /><label className='font-bold text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select' >Womens</label>
            </div>
            <h3 className='font-bold mt-3 ms-5  '>Filter</h3><hr className='mt-3 mb-3' />

          </div> */}


    </>
  )
}
