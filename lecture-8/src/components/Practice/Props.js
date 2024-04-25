import React from "react";
import data from './Data';
import './style.css'
export default function PropsSec({ earings, per, pno }) {
  return (

    // Use this div when you don't want to use data.map method and want to call components how many times you want to print it
    
    // <div style={{ display: "inline-flex",justifyContent: "space-between" , alignItems:"center"}} className="flex justify-center text-center">
    //   <div  className="parent row  flex justify-center  text-center">


    <div className="child-1 col-4 h-40 w-56  flex justify-center  text-center mb-2 mt-2 ms-2 me-2">
      <div className="secpa flex justify-between">
        <div className="earning text-sm font-bold text-gray-400">{earings}</div>
        <div className="incre">{per}</div>
      </div>
      <div className="">{pno}</div>
    </div>


  )
}









