import React from 'react'

export default function Props({ name, age, course }) {
  return (
    <div className='bg-slate-300 w-52 mt-5 rounded p-10 m-10' >
      name is :{name} <br />
      age is :{age} <br />
      course is :{course} <br />
      <button className='text-white bg-blue-500 mt-4 p-3' >click here</button>
    </div>
  )
}
