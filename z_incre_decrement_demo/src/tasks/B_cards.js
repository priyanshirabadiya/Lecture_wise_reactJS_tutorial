// rfc ->react function base component

import React from 'react'
export default function Props(props) {
  return (
    <>
    <div className='h-auto max-w-96 m-2 rounded-3xl relative'>
      <div className='h-auto mt-10 items-center flex justify-center rounded-t-3xl p-7 rounded-bl-3xl bg-blue-500  left-4'>
        <div className='w-auto rounded-full p-1.5 bg-white' >
          <div className='w-auto  rounded-full p-1.5 bg-blue-500' >
            <img src={props.img} style={{ height: "150px", width: "150px" }} className='rounded-full bg-cover' alt="" />
          </div>
        </div>
      </div>
      <div className='h-10 w-10 bg-blue-500 absolute right-0 -z-10'></div>
      <div className='h-10 w-10 bg-gray-200 absolute left-0 -mt-5 -z-20'></div>
      <div className='h-64 items-center text-center  flex justify-center z-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-gray-200 max-w-lg left-4  text-lg'>
        <div className='ps-5 pe-5 -mt-7'> {props.name} 
          <div className='mt-3 text-gray-500'>{props.para}</div> 
            <button className='mt-8  bg-blue-500 ps-3 rounded-2xl pe-3 p-2 text-white'>View More</button>
        </div>
      </div>
    </div>
    </>
  )
}