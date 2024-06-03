import React from 'react'

import Dropdownsectime from './2_Dropdowns/Dropdownsectime'
import Number from './2_Number/Number'
import Cate from './2_Newcatagories/Cate'
export default function Header2() {
  return (
    <div>
      <div className=" flex relative">
        <div className='sec-nav z-40' >
          <Cate />
        </div>
        <div className='mt-3 w-full relative flex justify-between'>
            <div className='sec-nav'><Dropdownsectime/></div>
            <div className='sec-nav'><Number /></div>
        </div>
      </div>
    </div>
  )
}
