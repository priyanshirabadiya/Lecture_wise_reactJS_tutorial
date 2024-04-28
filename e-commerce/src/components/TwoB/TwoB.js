import React from 'react'
import img4 from '../assets/banner-4.jpg'
import img5 from '../assets/banner-5.jpg'
import './style.css'
export default function TwoB() {
  return (
    <div>
       <div className="two-box  lg:me-0 xl:me-5">
          <div className="first md:ms-0 lg:ms-3">
            <img src={img4} className='rounded object-cover size' alt="" />
          </div>
          <div className="sec md:ms-0 lg:ms-0 xl:ms-0">
            <img src={img5} className='rounded object-cover size' alt="" />
          </div>
        </div>
    </div>
  )
}
