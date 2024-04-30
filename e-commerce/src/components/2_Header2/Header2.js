import React from 'react'

import Dropdown from '../2_Cat_nav/Dropdown'
import Number from '../2_Number/Number'
import Cate from '../7_Catagories_Ndropdown/Cate'
export default function Header2() {
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
            </div>
          </div>
    </div>
  )
}
