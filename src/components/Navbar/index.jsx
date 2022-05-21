import React from 'react'
import { Link } from 'react-router-dom'
import ArtsHubLogo from '../../assets/icons/artshublogo.svg'
import CustomLink from '../CustomLink'

const navItems = [
  {
    title: 'Artworks',
    link: '/'
  },
  {
    title: 'Tours',
    link: '/tours'
  },
  {
    title: 'Products',
    link: '/products'
  }
]
const Navbar = () => {
  return (
    <nav className='bg-white h-[80px] sm:flex justify-between items-center sm:px-10 px-5 border-gray-300 w-full'>
      <Link to="/">
        <img src={ArtsHubLogo} alt="ArtsHub Logo" />
      </Link>
      <div className="sm:flex">
          {navItems.map(navItem => (
              <CustomLink key={navItem.title} to={navItem.link}>{navItem.title}</CustomLink>
          ))}
      </div>
    </nav>
  )
}
export default Navbar
