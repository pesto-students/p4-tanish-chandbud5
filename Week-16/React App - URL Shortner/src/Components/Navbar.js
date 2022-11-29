import React from 'react'
import '../CSS/navbar.css'

// Navbar with other nav-links
function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='title'>Shortly</h1>
        <div className='nav'>
            <ul className='nav-items'>
                <li><a href='/'>Home</a></li>
                <li><a href='/error'>About</a></li>
                <li><a href='/error'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar