import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='navContainer'>
      <img src={Logo} alt="" />
    </nav>
  )
}

export default Navbar