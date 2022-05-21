import React from 'react'
import PropTypes from 'prop-types'

const PaginationControl = ({ page, setPage, currentPage, totalPages }) => {
  return (
    <div className="flex justify-between px-4 py-3 mt-10 border-2 border-gray-800 w-80 bg-white">
      <button type="button" onClick={() => setPage(page - 1)} disabled={page === 1 }>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15V15ZM30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15V15ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H10.7006L14.7263 19.9612C14.8134 20.0484 14.8826 20.1519 14.9297 20.2658C14.9769 20.3797 15.0012 20.5017 15.0012 20.625C15.0012 20.7483 14.9769 20.8703 14.9297 20.9842C14.8826 21.0981 14.8134 21.2016 14.7263 21.2888C14.6391 21.3759 14.5356 21.4451 14.4217 21.4922C14.3078 21.5394 14.1858 21.5637 14.0625 21.5637C13.9392 21.5637 13.8172 21.5394 13.7033 21.4922C13.5894 21.4451 13.4859 21.3759 13.3987 21.2888L7.77375 15.6638C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49832 15.1233 7.49832 15C7.49832 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3362L13.3987 8.71125C13.5748 8.53521 13.8135 8.43632 14.0625 8.43632C14.3115 8.43632 14.5502 8.53521 14.7263 8.71125C14.9023 8.88729 15.0012 9.12605 15.0012 9.375C15.0012 9.62395 14.9023 9.86271 14.7263 10.0388L10.7006 14.0625H21.5625Z"
            fill={page === 1 ? 'gray' : 'black'}
          />
        </svg>
      </button>
      <span className="font-medium">
        {currentPage}/{totalPages}
      </span>
      <button type="button" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15V15ZM30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15V15ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2737 19.9612C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2737 21.2888C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6013 21.2888L22.2263 15.6638C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2263 14.3362L16.6013 8.71125C16.5141 8.62408 16.4106 8.55494 16.2967 8.50777C16.1828 8.4606 16.0608 8.43632 15.9375 8.43632C15.8142 8.43632 15.6922 8.4606 15.5783 8.50777C15.4644 8.55494 15.3609 8.62408 15.2737 8.71125C15.1866 8.79841 15.1174 8.90189 15.0703 9.01578C15.0231 9.12967 14.9988 9.25173 14.9988 9.375C14.9988 9.49827 15.0231 9.62033 15.0703 9.73422C15.1174 9.84811 15.1866 9.95159 15.2737 10.0388L19.2994 14.0625H8.4375Z"
            fill={page === totalPages ? 'gray' : 'black'}
          />
        </svg>
      </button>
      <button type="reset" onClick={() => setPage(1)}>
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0022 5.74249C15.3436 5.74337 17.6217 6.48447 19.4953 7.85478C21.3688 9.22509 22.737 11.1509 23.3949 13.3436C24.0528 15.5364 23.965 17.8782 23.1446 20.0181C22.3242 22.1581 20.8155 23.9812 18.8443 25.2142C16.8731 26.4472 14.5456 27.0238 12.2104 26.8577C9.87518 26.6916 7.65799 25.7916 5.89088 24.2927C4.12378 22.7937 2.9019 20.7765 2.40824 18.543C1.91458 16.3095 2.17572 13.9801 3.15255 11.9036C3.25887 11.6512 3.26101 11.3683 3.15852 11.1144C3.05602 10.8604 2.85684 10.655 2.60266 10.5411C2.34848 10.4272 2.059 10.4136 1.7948 10.5032C1.5306 10.5929 1.31217 10.7787 1.18522 11.0219C0.0130755 13.5139 -0.300171 16.3093 0.292402 18.9895C0.884975 21.6697 2.35147 24.0904 4.47221 25.8891C6.59296 27.6877 9.2538 28.7674 12.0562 28.9665C14.8585 29.1656 17.6515 28.4733 20.0169 26.9933C22.3822 25.5134 24.1925 23.3254 25.1766 20.7572C26.1607 18.189 26.2656 15.3788 25.4756 12.7475C24.6857 10.1162 23.0433 7.80546 20.7947 6.16145C18.546 4.51744 15.812 3.62864 13.0022 3.62817V5.74249Z"
            fill="black"
          />
          <path
            d="M13.0022 8.84184V0.528379C13.0021 0.427942 12.9728 0.329594 12.9175 0.244853C12.8623 0.160111 12.7834 0.0924832 12.6902 0.0498884C12.597 0.00729358 12.4933 -0.00850497 12.3912 0.00434264C12.2892 0.0171903 12.1929 0.0581523 12.1139 0.122432L7.00054 4.27916C6.93958 4.32877 6.89054 4.39084 6.85689 4.46099C6.82323 4.53114 6.80579 4.60765 6.80579 4.68511C6.80579 4.76257 6.82323 4.83908 6.85689 4.90923C6.89054 4.97937 6.93958 5.04145 7.00054 5.09106L12.1139 9.24779C12.1929 9.31207 12.2892 9.35303 12.3912 9.36588C12.4933 9.37872 12.597 9.36293 12.6902 9.32033C12.7834 9.27774 12.8623 9.21011 12.9175 9.12537C12.9728 9.04063 13.0021 8.94228 13.0022 8.84184V8.84184Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  )
}

export default PaginationControl

PaginationControl.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
}
