import React, { useState, useEffect } from 'react'
import './style.css'
import c1 from '../assets/c1.svg'
import Data from './Data'
import I1 from '../assets/shape.jpg'

export default function Top_catagories() {
    const [data, setData] = useState(Data);

    useEffect(() => {
        setData(Data)
    }, [])
    return (
        <div>
            <div className='flex  mt-14'>
                <h4 className='text-2xl font-bold'>Top</h4>
                <div>
                    <span className='text-2xl leading-8 ms-2 TC ani' >Categories
                        <span className='mt-3'><img src={I1} alt="" className='' /></span>
                    </span>
                </div>
            </div>
            <div className='flex top-cata justify-between mt-5 flex-wrap' >
                {data.map((cvalue, ind) => {
                    return (
                        <div className='f-main' key={ind} >
                            <div className="f-bg relative">
                                <img src={cvalue.img} alt="" className='fn__svg' />
                                <span>{cvalue.id}</span>
                                <div className="line sm:hidden md:hidden lg:hidden xl:flex ">{cvalue.line}</div>
                            </div>
                            <div className="texts">
                                <h5 className="tpcategory__title"><a href="/shop">{cvalue.fname} <br />{cvalue.lname}</a></h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
