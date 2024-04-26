// import React  from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact" >Contact</Link>
            </li>
        </ul>
    </div>
  )
}
