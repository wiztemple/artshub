import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const ArtCard = ({
  title,
  artImage,
  artworkId,
  departmentTitle,
  artworkTypeTitle,
  onLoanDisplay
}) => {
  const truncate = (input) =>
    input?.length > 55 ? `${input.substring(0, 55)}...` : input
  return (
    <div className="bg-white artcard font-inter rounded-sm mb-10 sm:mb-0">
      <motion.div
        animate={{
          scale: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <img
          className="block sm:h-[550px] h-[400px] w-full object-cover"
          src={artImage}
          alt={title}
        />
      </motion.div>
      <div className="relative sm:flex px-5 pt-5 sm:h-[250px]">
        <div className="sm:border-r-2 border-gray-700 flex-1 pr-3 h-[170px]">
          <span className="uppercase">{artworkTypeTitle}</span>
          <Link to={`/artworks/${artworkId}`} className="block underline text-[24px] font-semibold uppercase">{truncate(title)}</Link>
        </div>
        <div className="flex-1 pl-5">
          <h1 className="text-sm uppercase font-medium">{departmentTitle}</h1>
          <div
            className="text-gray-800 pt-2"
            dangerouslySetInnerHTML={{ __html: onLoanDisplay }}
          ></div>
          <div className="w-full">
            <Link
              to={`/artworks/${artworkId}`}
              className="absolute right-6 bottom-16 flex items-center justify-center h-[40px] w-[40px] rounded-full border border-gray-800"
            >
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 6.5C0 6.30848 0.067725 6.12481 0.188276 5.98938C0.308828 5.85396 0.472331 5.77788 0.642816 5.77788H15.8043L11.7584 1.23429C11.6377 1.0987 11.5699 0.914793 11.5699 0.723033C11.5699 0.531273 11.6377 0.347366 11.7584 0.211771C11.8791 0.0761763 12.0428 4.51803e-09 12.2135 0C12.3842 -4.51803e-09 12.5479 0.0761763 12.6686 0.211771L17.8111 5.98874C17.871 6.05582 17.9185 6.1355 17.9509 6.22324C17.9833 6.31097 18 6.40502 18 6.5C18 6.59498 17.9833 6.68903 17.9509 6.77676C17.9185 6.8645 17.871 6.94418 17.8111 7.01126L12.6686 12.7882C12.5479 12.9238 12.3842 13 12.2135 13C12.0428 13 11.8791 12.9238 11.7584 12.7882C11.6377 12.6526 11.5699 12.4687 11.5699 12.277C11.5699 12.0852 11.6377 11.9013 11.7584 11.7657L15.8043 7.22212H0.642816C0.472331 7.22212 0.308828 7.14604 0.188276 7.01062C0.067725 6.87519 0 6.69152 0 6.5V6.5Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArtCard

ArtCard.propTypes = {
  artworkId: PropTypes.number.isRequired,
  departmentTitle: PropTypes.string,
  artworkTypeTitle: PropTypes.string,
  artImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onLoanDisplay: PropTypes.string
}

ArtCard.defaultProps = {
  departmentTitle: 'Title',
  artworkTypeTitle: 'Artwork type',
  onLoanDisplay: 'Arts'
}
