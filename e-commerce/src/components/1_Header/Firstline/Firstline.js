import React from 'react'

export default function Firstline() {
    return (
        <div>
            <div className='hooter-line pb-[0.7rem] relative pt-[0.7rem] bg-[#F3EEE7] flex items-center'>
                <p className='px-7 text-sm font-bold tracking-[0.5px] '>Welcome to our international shop! Enjoy free shipping on orders $100 up</p>
                <a href="/shop" className='text-sm font-bold text-[#d51243] -ms-4 ' >Shop Now <i className="fa-solid fa-arrow-right" style={{ color: "#d51243" }}></i> </a>
            </div>
        </div>
    )
}
