import React from 'react'
export default function Number() {
    return (
        <>
            <div className="num flex m-3 pe-4">
                <div className="flex">
                <i className="fa-solid fa-phone-flip me-2 mt-1 " style={{ color: "#d71d1d" }}></i>
                <span className="font-medium text-sm mt-1">908.408.501.89</span>    
                </div>
                <div className="flex">
                <i className="fa-solid fa-location-dot ms-7 me-2 mt-1" style={{ color: "#d71d1d" }}></i>
                <span className="font-medium text-sm mt-1">Find Store</span>
                </div>
            </div>
        </>
    )
}



