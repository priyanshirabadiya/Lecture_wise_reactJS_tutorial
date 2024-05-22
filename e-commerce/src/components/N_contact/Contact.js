import React from 'react'
import { Link } from 'react-router-dom'
import { PiPhoneLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiHeadphones } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Header2 from '../Commancomponents/2_Header2/Header2'
import './style.css'

export default function Contact() {
  return (
    <div>
      <div className="">
        <Header2 />
      </div>
      <div className="flex flex-wrap justify-center sm:justify-center md:justify-center lg:justify-between mt-14 mx-7">
        <div>
          <div className="box border-2 mb-0  p-10 pb-0 h-[21rem] md:pe-20 lg:pe-5 xl:pe-20 rounded">
            <h2 className='text-[1.5rem] font-bold '>Get In Touch
            </h2>
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
            <button className='p-4 f-change rounded  w-[30vw] justify-center border mt-4 flex font-bold'><Link to="/error" >Get support on Call</Link><CiHeadphones className='ms-5 mt-1 f-change2 ' /> </button>
            <button className='p-4 f-change rounded  w-[30vw] justify-center border mt-4 flex font-bold'><Link href="" target='_blank' >Get Location</Link> <IoLocationOutline className='ms-5 mt-1 f-change2 ' /> </button>
          </div>
        </div>
        <form action="https://formspree.io/f/mgegddld" method="POST">
          <div className='mb-5 md:mt-10 lg:mt-0 ' >
            <h2 className='text-[1.5rem] font-bold' >Make Custom Request</h2>
            <p className='text-[0.9rem] text-gray-500 text-wrap' >Must-have pieces selected every month want style Ideas and Treats?</p>
            <div className="flex flex-wrap mt-3">
              <input type="text" required name='text' id='text' className='border p-4 placeholder:text-[0.9rem] w-[28vw] placeholder:text-gray-500 me-8 rounded' placeholder='Full name' />
              <input type="email" required name='email' id='email' className='border p-4 placeholder:text-[0.9rem] w-[28vw] placeholder:text-gray-500 rounded' placeholder='Email address' />
            </div>
            <div className="flex flex-wrap mt-4">
              <input type="text" required name='number' id='number' className='border p-4 placeholder:text-[0.9rem] w-[28vw] placeholder:text-gray-500 me-8 rounded' placeholder='Phone number' />
              <input type="text" required name='subject' id='subject' className='border p-4 placeholder:text-[0.9rem] w-[28vw] placeholder:text-gray-500 rounded' placeholder='Subject' />
            </div>
            <input type="text" required name='message' id='message' className='w-[50vw] h-[16.5rem] mt-4 border placeholder:ps-3 rounded  placeholder:text-[0.9rem]  placeholder:text-gray-500' placeholder='Enter message' />
            <button type='submit' className='p-4 rounded w-[12vw] justify-center bg-[#d5123d] text-white border ll-1 mt-4 flex font-bold'>Get a Quote<FaArrowRightLong className='ms-3 mt-1 right-animation ' /> </button>
          </div>
        </form>
      </div>
      <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.024516561165946!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714619114187!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
