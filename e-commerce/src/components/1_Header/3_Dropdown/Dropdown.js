import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function Dropdown() {
    return (
        <div className='flex last-one absolute'>
            <div className="dropdown first  ms-4 rounded">
                <button className="dropbtn h-[4.6rem]  rounded-md flex"><b>Home</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className='absolute' >
                    <div className="dropdown-content font-bold">
                        <div className='' >
                            <Link to="/">Wooden Home</Link>
                            <a href="#">Fashion Home</a>
                            <a href="#">Furniture Home</a>
                            <a href="#">Cosmetics Home</a>
                            <a href="#">Food Grocery</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn h-[4.2rem] rounded-md flex"><b>Shop</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div>
                    <div className="dropdown-content font-bold mt-2 ">
                        <Link to="/shop">Shop</Link>
                        <Link to="/shop2">Shop 2</Link>
                        <a href="#">Shop Details</a>
                        <a href="#">Shop Details 2</a>
                        <Link to="/shop_details">Shop Location</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/Sign_inandLog_in">Sign In</Link>
                        <Link to="/checkout">Checkout</Link>
                        <Link to="/wishlist">Wishlist</Link>
                        <Link to="/ProductTrack">Product Track</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn  h-[4.2rem] rounded-md flex"><b  >Pages</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div>
                    <div className="dropdown-content mt-2 " style={{ width: "600px" }}>
                        <div className='flex justify-between'>
                            <a href="#" style={{ fontWeight: "bolder" }}>Page layout</a>
                            <a href="#" style={{ fontWeight: "bolder" }}>Page layout</a>
                            <a href="#" style={{ fontWeight: "bolder" }}>Page Type</a>
                        </div>
                        <div className='flex justify-between '>
                            <Link to="/shop" className='w-36 h-1'>Shop filters v1</Link>
                            <Link to="about" className='w-20' >About</Link>
                            <Link to="/ProductTrack">Product Track</Link>
                        </div>
                        <div className='flex justify-between'>
                            <Link to="/shop2" className='w-36 h-1'>Shop filters v2</Link>
                            <Link to="/cart" className='w-24'>Cart</Link>
                            <Link to="/Wishlist" >Wishlist</Link>
                        </div>
                        <div className='flex justify-between'>
                            <a href="" className='w-36 h-1'>Shop sidebar</a>
                            <a href="" className='w-36'>Checkout</a>
                            <Link to="/error" >404/error</Link>
                        </div>
                        <div className='flex justify-between'>
                            <a href="" className='w-36 h-1'>Shop Right sidebar</a>
                            <Link to="/signin" className='w-24'>Sign In</Link>
                            <a href="">Coming soon</a>
                        </div>
                        <div className='flex justify-between'>
                            <Link to="/shop_details" className='w-36 h-1'> Shop List view</Link>
                            <Link to="/login" className='w-40'>Log In</Link>
                            <a href=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn h-[4.2rem] rounded-md flex"><b>Blog</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content mt-2 font-bold">
                    <Link to="/about" >Blog</Link>
                    <Link to="/about">Blog Details</Link>
                </div>
            </div>
            <div className="dropdown ms-9 rounded">
                <button className="dropbtn rounded-md flex"><b><Link to="/contact" >Contact</Link></b></button>
            </div>

        </div>
    )
}

