import React from 'react'
import Header2 from '../../2_Header2/Header2';
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { PiPhoneLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import './style.css';
import './Data'
import lo1 from '../../assets/location-1.jpg'
import lo2 from '../../assets/location-2.jpg'
import lo3 from '../../assets/location-3.jpg'
import lo4 from '../../assets/location-4.jpg'

export default function Shop_Location() {
  return (
    <div>
      <Header2 />
      <div className='pb-[100vh]'>
        <div className="bg-img pb-52 lg:mt-0 xl:-mt-8 w-full bg-no-repeat relative">
          <div className='flex flex-wrap justify-between top-10 absolute left-10' >
            <a href="" className='home' >Home</a>
            <div className='mt-3 ms-2' >
              <div className='w-[3vw] border-b-2 border-[#e2e2e2] -me-2' ></div>
            </div>
            <p className='text-gray-400' >shop Location</p>
          </div>
          <h1 className='top-20 left-10 absolute text-[42px] font-bold'>shop Location</h1>


        </div>
        <div className="flex justify-center mt-5 ">
          <div className="long-box  w-[40vw]  border rounded flex justify-between ">
            <input type="text" className='ms-5 placeholder:text-sm  ' placeholder='search here' />
            <button className='flex right-0 bg-[#d51243] h-[3.5rem] text-white px-14 font-bold items-center' >
              Find nearby store <FaArrowRightLong className='ms-3' />
            </button>
          </div>
        </div>
        <div className='mx-14 flex justify-between '>
          <div className="flex justify-center mt-10 border rounded h-auto w-[49vw] ">
            <div className=" mb-0  p-10 pb-0 h-[21rem] md:pe-20 lg:pe-5 xl:pe-20 rounded">
              <h2 className='text-[1.1rem] font-bold '>Baldwin Hills Crenshaw Plaza</h2>
              <div className="flex mt-4">
                <p><CiLocationOn /></p>
                <a href="" className='ms-2 -mt-1 text-gray-500 text-[1rem] leading-7 hover:text-[#D51243] hoverable-2 '>24/26 Strait Bargate, Boston, PE21,<br /> United Kingdom</a>
              </div>
              <div className="mt-4  leading-none">
                <div className="flex mt-5">
                  <p><PiPhoneLight className='-ms-[0.1rem]' /></p>
                  <Link href="/tel" to="/error" className='ms-2  text-gray-500 text-[1rem]'>+098 (905) 786 897 8</Link>
                </div>
                <br />
                <a href="/tel" className='ms-6 -mt-2 absolute text-gray-500 text-[1rem] leading-none'>6 - 146 - 389 - 5748</a>
              </div>
              <div className="flex mt-10">
                <p><GoClock /></p>
                <p href="" className='ms-2 -mt-1 text-gray-500 text-[0.98rem] leading-6'>Store Hours:<br />  10 am - 10 pm EST, 7 days a week</p>
              </div>
            </div>
            <div>
              <img src={lo1} alt="" className='h-full' />
            </div>
          </div>

        </div>
      </div>

      <div>

      </div>

    </div>
  )
}
