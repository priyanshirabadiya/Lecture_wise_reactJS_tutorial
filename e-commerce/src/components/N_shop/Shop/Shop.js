import React, { useState } from 'react';
import { IoListOutline } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import './style.css';
import Header2 from '../../Commancomponents/2_Header2/Header2';
// import Popular_p from './5_Poular_products/Popular_p';
import Popular_p from '../../0_Home/5_Poular_products2/Popular_p';

import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import Shopofside from './Shopofside/Shopofside';

export default function Shop() {

  const [view , setview] = useState('popular');

  const onclickshopdata = () => {
    setview('popular');
  }

  const onclickshopdata2 = () => {
    setview('sidedata');
  }

  return (
    <>
      <div>
        <Header2 />
      </div>
      <Pageheading pagename="Shop" />
      <div className="mx-7 mt-10 flex flex-wrap justify-between">
        <div className='flex'>
          <p className='font-bold text-lg'>10</p>
          <span className='font-bold text-gray-500 m-[0.2rem] mt-[0.5px]'>
            Item On List
          </span>
        </div>
        <div className="select-div flex flex-wrap">
          <div className="flex md:flex-nowrap">
            <select name="" id="" className='chosen-single form-select me-5 h-12'>
              <option value="">Sort by(default)</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
            <select name="" id="" className='chosen-single form-select h-12'>
              <option value="">All</option>
              <option value="">10 per Page</option>
              <option value="">20 per Page</option>
              <option value="">30 per Page</option>
            </select>
          </div>
          <div className='icon-div'>
            <button onClick={onclickshopdata}>
              <IoListOutline className='h-6 mt-[12px] w-10 hover:text-[#d12321]' />
            </button>
          </div>
          <div className='icon-div'>
            <button onClick={onclickshopdata2}>
              <LiaTableSolid className='h-6 mt-[12px] -ms-2 w-10 hover:text-[#d12321]' />
            </button>
          </div>
        </div>
      </div>
      <div>
        {view === 'popular' ? <Popular_p/> : <Shopofside/> }
      </div>
    </>
  );
}

