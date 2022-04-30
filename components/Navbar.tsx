import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomLink from './CustomLink'

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Tours',
    link: '/tours',
  },
  {
    title: 'Products',
    link: '/products',
  },
]
const Navbar = () => {
  return (
    <nav className="flex h-[80px] w-full items-center justify-between border-b border-gray-300 bg-[#FFF8F0] md:px-10">
      <Link href="/">
        <Image
          src="/artshublogo.svg"
          alt="ArtsHub Logo"
          width={96}
          height={33}
        />
      </Link>
      <div className="flex">
        {navItems.map((navItem) => (
          <CustomLink key={navItem.title} href={navItem.link}>
            {navItem.title}
          </CustomLink>
        ))}
      </div>
      <div>
        <Link href="/search">
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
