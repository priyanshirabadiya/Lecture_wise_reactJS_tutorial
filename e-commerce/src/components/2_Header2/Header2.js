import React from 'react'

import Dropdown from './2_Dropdowns/Dropdown'
import Number from './2_Number/Number'
import Cate from './2_Newcatagories/Cate'
export default function Header2() {
  return (
    <div>
      <div className=" flex relative">
            <div className='sec-nav z-40' >
              <Cate/>
            </div>
            <div className='mt-3 relative'>
              <div className='flex justify-between absolute w-[82vw]'>
                <div className='sec-nav'><Dropdown/></div>
                <div className='sec-nav'><Number/></div>
              </div>
            </div>
          </div>
    </div>
  )
}
