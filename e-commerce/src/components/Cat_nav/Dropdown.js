import React from 'react'
import './style.css'

export default function Dropdown() {
    return (
        <div className='flex last-one'>
            <div className="dropdown ms-4 rounded">
                <button className="dropbtn rounded-md flex"><b>Home</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content font-bold">
                    <a href="#">Wooden Home</a>
                    <a href="#">Fashion Home</a>
                    <a href="#">Furniture Home</a>
                    <a href="#">Cosmetics Home</a>
                    <a href="#">Food Grocery</a>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn rounded-md flex"><b>Shop</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content font-bold">
                    <a href="#">Shop</a>
                    <a href="#">Shop 2</a>
                    <a href="#">Shop Details </a>
                    <a href="#">Shop Details 2</a>
                    <a href="#">Shop Location</a>
                    <a href="#">Cart</a>
                    <a href="#">Sign In</a>
                    <a href="#">Checkout</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Product Track</a>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn rounded-md flex"><b  >Pages</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content" style={{ width: "600px" }}>
                    <div className='flex justify-between'>
                        <a href="#" style={{ fontWeight: "bolder" }}>Page layout</a>
                        <a href="#" style={{ fontWeight: "bolder" }}>Page layout</a>
                        <a href="#" style={{ fontWeight: "bolder" }}>Page Type</a>
                    </div>
                    <div className='flex justify-between '>
                        <a href="" className='w-36 h-1'>Shop filters v1</a>
                        <a href="" className='w-20' >About</a>
                        <a href="">Product Track</a>
                    </div>
                    <div className='flex justify-between'>
                        <a href="" className='w-36 h-1'>Shop filters v2</a>
                        <a href="" className='w-24'>Cart</a>
                        <a href="">Wishlist</a>
                    </div>
                    <div className='flex justify-between'>
                        <a href="" className='w-36 h-1'>Shop sidebar</a>
                        <a href="" className='w-36'>Checkout</a>
                        <a href="">404/error</a>
                    </div>
                    <div className='flex justify-between'>
                        <a href="" className='w-36 h-1'>Shop Right sidebar</a>
                        <a href="" className='w-24 '>Sign In</a>
                        <a href="">Coming soon</a>
                    </div>
                    <div className='flex justify-between'>
                        <a href="" className='w-36 h-1'>Shop List view</a>
                        <a href="" className='w-40'>Log In</a>
                        <a href=""></a>
                    </div>

                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn rounded-md flex"><b>Blog</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content font-bold">
                    <a href="#">Blog</a>
                    <a href="#">Blog Details</a>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn rounded-md flex"><b>Contact</b></button>
            </div>
        </div>
    )
}
