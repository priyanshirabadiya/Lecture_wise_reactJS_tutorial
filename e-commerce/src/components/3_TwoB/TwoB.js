import React from 'react'
import img4 from '../assets/banner-4.jpg'
import img5 from '../assets/banner-5.jpg'
import './style.css'
export default function TwoB() {
  return (
    <div>
       <div className="two-box  lg:me-0 xl:me-5">
          <div className="first md:ms-0 lg:ms-3 relative">
            <img src={img4} className='rounded object-cover size' alt="" />
            <span class="side-text absolute top-8 left-10 ">Hand made</span>
            <h4 className='sec-side-text absolute top-14 left-10 mt-1'>New Modern  Stylist <br/> Crafts</h4>
          </div>
          <div className="sec md:ms-0 lg:ms-0 xl:ms-0 relative">
            <img src={img5} className='rounded object-cover size' alt="" />
            <span class="side-text absolute top-8 left-10 ">Popular</span>
            <h4 className='sec-side-text absolute top-14 left-10 mt-1'>Energy with our <br/>  newest collection</h4>
          </div>
        </div>
    </div>
  )
}
