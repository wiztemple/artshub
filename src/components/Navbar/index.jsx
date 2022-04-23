import React from 'react'
import { Link } from 'react-router-dom'
import ArtsHubLogo from '../../assets/icons/artshublogo.svg'

const Navbar = () => {
  return (
    <nav className="bg-[#FFF8F0] h-[90px] relative border-b border-gray-300 w-full">
      <Link to="/" className="artshub-logo">
       <img src={ArtsHubLogo} alt="ArtsHub Logo" />
      </Link>
    </nav>
  )
}
export default Navbar
