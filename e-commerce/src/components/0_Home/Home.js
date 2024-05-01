import React from 'react'
import Cate from '../1_Header/2_Catagories/Cate'
import Dropdown from '../1_Header/2_Dropdowns/Dropdown'
import Number from '../1_Header/2_Number/Number'
import Slider from './3_Slider/Slider'
import TwoB from './3_TwoB/TwoB'
import Top_catagories from './4_Top catagories/Top_catagories'
import Popular_p from './5_Poular_products/Popular_p'
import Pots from './6_Pots/Pots'


export default function Home() {
  return (
    <div>
      <div className=" flex ">
        <div className='sec-nav z-40' >
          <Cate />
        </div>
        <div className='mt-3 w-full '>
          <div className='flex justify-between pe-7'>
            <div className='sec-nav'><Dropdown /></div>
            <div className='sec-nav'><Number /></div>
          </div>
          <div className='flex central wrap-div lg:flex-nowrap md:flex-wrap ' >
            <div className=' mt-2 f-s'><Slider /></div>
            <div className=' mt-2 '><TwoB /></div>
          </div>
        </div>
      </div>
      <Top_catagories />
      <Popular_p />
      <Pots />
    </div>
  )
}
