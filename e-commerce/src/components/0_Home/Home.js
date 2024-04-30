import React from 'react'
import Cate from '../2_Catagories/Cate'
import Dropdown from '../2_Cat_nav/Dropdown'
import Number from '../2_Number/Number'
import TwoB from '../3_TwoB/TwoB'
import Slider from '../3_Slider/Slider'

export default function Home() {
  return (
    <div>
      <div className=" flex ">
            <div className='sec-nav z-40' >
              <Cate/>
            </div>
            <div className='mt-3 w-full '>
              <div className='flex justify-between pe-7'>
                <div className='sec-nav'><Dropdown/></div>
                <div className='sec-nav'><Number/></div>
              </div>
              <div className='flex central wrap-div lg:flex-nowrap md:flex-wrap ' >
                <div className=' mt-2 f-s'><Slider /></div>
                <div className=' mt-2 '><TwoB/></div>
              </div>
            </div>
          </div>
    </div>
  )
}
