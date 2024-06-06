import React from 'react'
import './style.css'
import Header2 from '../../Commancomponents/2_Header2/Header2'
import Pageheading from '../../Commancomponents/Pageheading/Pageheading'
import e from '../../assets/e-logo.png'
export default function Errorpage() {
  return (
    <div>
      <div className='' >
        <div>
          <Header2/>
        </div>
        <Pageheading pagename="Error" />
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
            <i className="fa-solid fa-arrow-left me-4" style={{ color: "#ffffff" }}></i>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
