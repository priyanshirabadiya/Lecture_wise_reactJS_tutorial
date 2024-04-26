import React from 'react'
import Data from './Data'
import Props from './Props'

export default function About() {
  return (
    <>
      <p className='font-extrabold'>This are components</p>
    <div className="flex justify-between w-full">
      {Data.map((cvalue, ind, arr) => {
        return (
          <Props name={cvalue.name}
            age={cvalue.age}
            course={cvalue.course} ></Props>
        )
      })}
    </div>
    </>
  )
}
