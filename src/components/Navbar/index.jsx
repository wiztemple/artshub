import React from 'react'
import { Link } from 'react-router-dom'
import ArtsHubLogo from '../../assets/icons/artshublogo.svg'
import CustomLink from '../CustomLink'

const navItems = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Tours',
    link: '/tours'
  }
]
const Navbar = () => {
  return (
    <nav className='bg-cream h-[80px] flex justify-between items-center md:px-10 fixed border-b border-gray-300 w-full'>
      <Link to="/">
        <img src={ArtsHubLogo} alt="ArtsHub Logo" />
      </Link>
      <div className="flex">
          {navItems.map(navItem => (
              <CustomLink key={navItem.title} to={navItem.link}>{navItem.title}</CustomLink>
          ))}
      </div>
      <div>
        <Link to="/search">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
              stroke="#616681"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L29 29"
              stroke="#616681"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
