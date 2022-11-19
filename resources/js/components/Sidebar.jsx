import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/Sidebar.css'
import * as FaIcons from 'react-icons/fa'

function Sidebar() {
  
    let activeStyle = {
        background: "lightgrey",
        textDecoration: "underline",
      };

    return (
    <div className='sidebar'>
        <ul>
            <li><NavLink to="/" exact className='text-dark' style={({ isActive }) => isActive ? activeStyle : undefined }>
                <FaIcons.FaHome className='me-2'/> Home</NavLink></li>
            <li><NavLink to="/products" className='text-dark'><FaIcons.FaCoffee className='me-2'/> Products</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar