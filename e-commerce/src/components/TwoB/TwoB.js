import React from 'react'
import img4 from '../assets/banner-4.jpg'
import img5 from '../assets/banner-5.jpg'
import './style.css'
export default function TwoB() {
  return (
    <div>
       <div className="two-box me-10">
          <div className="first  ">
            <img src={img4} className='rounded object-cover' alt="" />
          </div>
          <div className="sec">
            <img src={img5} className='rounded object-cover' alt="" />
          </div>
        </div>
    </div>
  )
}
