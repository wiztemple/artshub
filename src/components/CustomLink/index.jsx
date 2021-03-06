import React from 'react'
import {
  Link,
  useMatch,
  useResolvedPath
} from 'react-router-dom'
import PropTypes from 'prop-types'

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
      <div>
        <Link
          className={`py-7 px-8 uppercase ${match ? 'font-medium bg-black py-3 px-8 text-white rounded-3xl' : ''}`}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
  )
}

export default CustomLink

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
