import React from 'react'
import { Link } from 'react-router-dom'
import ArtsHubLogo from '../../assets/icons/artshublogo.svg'

const socials = [
  {
    title: 'Instagram',
    link: 'a'
  },
  {
    title: 'Twitter',
    link: 'a'
  },
  {
    title: 'LinkedIn',
    link: 'a'
  },
  {
    title: 'Github',
    link: 'a'
  }
]
const works = [
  {
    title: 'Visit API documentation',
    link: 'a'
  },
  {
    title: 'Cov19Strain',
    link: 'b'
  }
]
const Footer = () => {
  return (
    <footer className="md:mt-32 border-t border-gray-300 md:px-10">
      <Link to="/" className="block md:pt-20">
        <img src={ArtsHubLogo} alt="ArtsHub Logo" />
      </Link>
      <div className="flex md:pt-20 items-start">
        <div className="flex flex-1 md:space-x-12">
          <div className="">
            <span className="uppercase text-sm">WORKS</span>
            <div className="pt-4">
                {works.map(work => (
                    <a href={work.link} target="_blank" className="block text-xl py-1" key={work.title} rel="noreferrer">
                    {work.title}
                  </a>
                ))}
            </div>
          </div>
          <div className="">
            <span className="uppercase text-sm">CONTACT</span>
            <div className="pt-4">
            <a href="a" target="_blank" className="block text-xl py-1">
              wiz@gmail.com
            </a>
            {socials.map(social => (
                <a href={social.link} target="_blank" className="flex items-center text-xl py-1 space-x-2" key={social.title} rel="noreferrer">
                <span>{social.title}</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.01871 0.75C2.01871 0.551088 2.09773 0.360322 2.23838 0.21967C2.37903 0.0790177 2.5698 0 2.76871 0H8.26871C8.46762 0 8.65839 0.0790177 8.79904 0.21967C8.93969 0.360322 9.01871 0.551088 9.01871 0.75V6.25C9.01871 6.44891 8.93969 6.63968 8.79904 6.78033C8.65839 6.92098 8.46762 7 8.26871 7C8.0698 7 7.87903 6.92098 7.73838 6.78033C7.59773 6.63968 7.51871 6.44891 7.51871 6.25V2.56L1.29871 8.78C1.23005 8.85369 1.14725 8.91279 1.05525 8.95378C0.963247 8.99477 0.863934 9.01682 0.763231 9.01859C0.662528 9.02037 0.562499 9.00184 0.469111 8.96412C0.375723 8.9264 0.290889 8.87026 0.219671 8.79904C0.148452 8.72782 0.0923068 8.64299 0.0545858 8.5496C0.0168648 8.45621 -0.00166006 8.35618 0.00011672 8.25548C0.0018935 8.15478 0.0239355 8.05546 0.0649275 7.96346C0.105919 7.87146 0.165022 7.78866 0.238709 7.72L6.45871 1.5H2.76871C2.5698 1.5 2.37903 1.42098 2.23838 1.28033C2.09773 1.13968 2.01871 0.948912 2.01871 0.75Z"
                    fill="black"
                  />
                </svg>
              </a>
            ))}
            </div>
          </div>
        </div>
        <span className="block text-[128px] font-medium flex-1">ARtsHub</span>
      </div>
      <div className="md:pt-10 pb-5 flex items-center space-x-5">
          <span className="block text-sm">Copyright © 2022 ArtsHub. All rights reserved.</span>
          <span className="block text-sm">Terms of use.</span>
          <span className="block text-sm">Privacy Policy</span>
      </div>
    </footer>
  )
}

export default Footer
