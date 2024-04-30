import React from 'react'
import './style.css'
import Header from '../1_Header/Header'
import Ncate from '../7_Catagories_Ndropdown/Cate';
import Dropdown from '../2_Cat_nav/Dropdown';
import Number from '../2_Number/Number';
import e from '../assets/e-logo.png'
import Footer from '../Footer/Footer';
export default function Errorpage() {
  return (
    <div>
      <div className='' >
        <Header />
        <div className=" flex ">
          <div className='sec-nav z-40' >
            <Ncate />
          </div>
          <div className='mt-3 w-full'>
            <div className='flex justify-between '>
              <div className='sec-nav'><Dropdown /></div>
              <div className='sec-nav'><Number /></div>
            </div>
          </div>
        </div>
        <div className="bg-img pb-60 -mt-8 w-full  bg-no-repeat relative">
          <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
            <a href="" className='home' >Home</a>
            <p className='text-gray-400' >Error</p>
          </div>
          <h1 className='top-20 left-10 absolute text-[42px] font-bold' >Error</h1>
        </div>

        <div className="e-logo flex justify-center mt-20">
          <img src={e} alt="" />
        </div>
        <div className="text-center">
          <h1 className='mt-5 text-[42px] font-bold' >404. Page not found</h1>
          <p className='text-[#777] text-[17px] mt-5'>Sorry, we couldn’t find the page you where looking for. We suggest that <br /> you return to homepage.
            Back To Home</p>
        </div>
        <div className="flex justify-center mb-20">
          <button className='btn bg-[#d51243] text-sm text-white font-bold ps-9 pt-4 pe-11 pb-4 mt-20 rounded' >
            <i class="fa-solid fa-arrow-left me-4" style={{ color: "#ffffff" }}></i>
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}
