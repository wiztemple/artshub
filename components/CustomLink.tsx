import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ children, href, ...props }) => {
  const router = useRouter()

  return (
    <div>
      <Link href={href} {...props}>
        <a
          className={`py-7 px-8 ${
            router.pathname == `/${href}` ? 'border-b-2 border-gray-800' : ''
          }`}
        >
          {children}
        </a>
      </Link>
    </div>
  )
}

export default CustomLink
