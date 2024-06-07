import React from 'react';
import Header2 from '../../Commancomponents/2_Header2/Header2'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { PiPhoneLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import './style.css';

import Data from './Data';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';

export default function Shop_Location() {
  return (
    <div>
      <Header2 />
      <div className='pb-[10vh]'>

        <Pageheading pagename="shop Location" />

        <div className="flex justify-center class-of-hidden hide mt-5 ">
          <div className="long-box  w-[40vw] focus:border-none flex-wrap border rounded flex justify-between ">
            <input type="text" className='ms-5 placeholder:text-sm  ' placeholder='search here' />
            <button className=' right-0 bg-[#d51243] h-[3.5rem]  flex lg:visible text-white px-14 font-bold items-center' >
              Find nearby store <FaArrowRightLong className='ms-3' />
            </button>
          </div>
        </div>
        <div className='mx-14 flex md:justify-center  flex-wrap justify-between ' >
          {Data.map((cvalue, ind) => {
            return (
              <div className="flex justify-center me-3 flex-wrap lg:flex-nowrap mt-10 border rounded h-auto lg:w-[45vw] md:w-[90vw] " key={ind}>
                <div className=" mb-0  p-10 pb-0 h-[19rem] md:pe-20 lg:pe-5 xl:pe-8 rounded">
                  <h2 className='text-[1.1rem] font-bold '>{cvalue.heading}</h2>
                  <div className="flex mt-4">
                    <p><CiLocationOn /></p>
                    <a href="" className='ms-2 -mt-1 text-gray-500 text-[1rem] leading-7 hover:text-[#D51243] hoverable-2 '>{cvalue.ad1}</a>
                  </div>
                  <div className="mt-4  leading-none">
                    <div className="flex mt-5">
                      <p><PiPhoneLight className='-ms-[0.1rem]' /></p>
                      <Link href="/tel" to="/error" className='ms-2  text-gray-500 text-[1rem]'>{cvalue.n1}</Link>
                    </div>
                    <br />
                    <a href="/tel" className='ms-8 -mt-2 absolute text-gray-500 text-[1rem] leading-none'>{cvalue.n2}</a>
                  </div>
                  <div className="flex mt-10">
                    <p><GoClock /></p>
                    <p href="" className='ms-2 -mt-1 text-gray-500 text-[0.98rem] leading-6'>{cvalue.h1}<br />{cvalue.h2}</p>
                  </div>
                </div>
                <div>
                  <img src={cvalue.img} alt="" className='h-full' />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.024516561165946!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714619114187!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


    </div>
  );
}
