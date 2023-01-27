import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (

    <div>
        <h1>Services</h1>

        <nav>
        <Link to="/services/marketing">Service Marketing</Link>
        <Link to="/services/dev">Service dev</Link>

        
     </nav>
     <Outlet />
    </div>

     
  )
}
