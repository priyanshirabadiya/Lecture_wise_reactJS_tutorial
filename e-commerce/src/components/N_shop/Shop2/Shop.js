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
      <div className="f-class  flex flex-wrap lg:flex-nowrap">
        <div className="sf-class">
          <div className="mx-7 mt-10 flex flex-wrap justify-between">
            <div className='flex' >
              <p className='font-bold text-lg'>10</p><span className='font-bold text-gray-500 m-[0.2rem] mt-[0.5px] ' >
                Item On List
              </span>
            </div>
            <div className="select-div flex flex-wrap">
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
          <Popular_p />
        </div>
        {/* sidebar catagories */}

        <div className='w-[25vw] mt-10'>
          <h3 className='font-bold mt-2 mx-10'>Category</h3><hr className='mt-3 mb-3 mx-10' />
          <div className='ms-10' >
            <div className='mt-1' >
              <input type='checkbox' name='f-select' id="f-select" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select' >Kids</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select2" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select2' >Mens</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select3" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select3' >Womens</label>
            </div>
            <h3 className='font-bold mt-3 ms-5  '>Filter</h3><hr className='mt-3 mb-3 mx-5 ' />

            <div>
              <input type="range" className='w-[16vw]' id="volume" name="volume" min="0" max="100" /><br/>
              <label for="volume">100$</label>
            </div>
            <h3 className='font-bold mt-3 ms-5  '>Color</h3><hr className='mt-3 mb-3 mx-5 ' />
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select4" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select4' >Black</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select5" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select5' >Blue</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select9" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select9' >Gray</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select6" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select6' >Green</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select7" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select7' >Red</label>
            </div>

            <h3 className='font-bold mt-3 ms-5  '>Color</h3><hr className='mt-3 mb-3 mx-5 ' />
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select11" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select11' >Adidas</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select12" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select12' >Balenciaga</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select13" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select13' >Balmain</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select14" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select14' >Burberry</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='f-select' id="f-select15" /><label className=' text-[0.9rem] text-[gray] ms-4 cursor-pointer ' for='f-select15' >Chloe</label>
            </div>



          </div>
        </div>
      </div>

    </>
  )
}
