import React from 'react'
import './style.css'

export default function Pageheading(props) {
  return (
    <div>
       <div className="bg-img pb-60 md:mt-0 lg:-mt-8 w-full  bg-no-repeat relative ">
          <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
            <a href="" className='home' >Home</a>
            <p className='text-gray-400' >{props.pagename}</p>
          </div>
          <h1 className='top-20 left-10 absolute text-[42px] font-bold' >{props.pagename}</h1>
        </div>
    </div>
  )
}
