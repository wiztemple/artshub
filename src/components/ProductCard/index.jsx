import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductCard = ({ title, productImage, productId, price }) => {
  //   const truncate = (input) =>
  //     input?.length > 40 ? `${input.substring(0, 40)}...` : input
  return (
    <div className="productCard bg-[#eeebeb] sm:mb-0 mb-10">
      <Link to={`/products/${productId}`} className="block sm:p-12 p-10">
        <div className="imageWrapper">
          <img
            src={productImage}
            className="block h-96 w-full object-cover"
            alt={title}
          />
          <div className="overlay">
              <Link
                to={`/products/${productId}`}
                className="flex justify-center bg-white h-20 w-20 items-center rounded-full shadow"
              >
                <svg
                  title="see more details"
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 0C10.123 0 0 20 0 20C0 20 10.123 40 30 40C49.879 40 60 20 60 20C60 20 49.879 0 30 0ZM30 36.664C13.436 36.664 5 20 5 20C5 20 13.436 3.332 30 3.332C46.566 3.332 55 20 55 20C55 20 46.566 36.664 30 36.664Z"
                    fill="#293553"
                  />
                  <path
                    d="M29.8999 34.5C21.9049 34.5 15.3999 27.995 15.3999 20C15.3999 12.005 21.9049 5.5 29.8999 5.5C37.8949 5.5 44.3999 12.005 44.3999 20C44.3999 27.995 37.8959 34.5 29.8999 34.5ZM29.8999 8.5C23.5589 8.5 18.3999 13.659 18.3999 20C18.3999 26.341 23.5589 31.5 29.8999 31.5C36.2409 31.5 41.3999 26.341 41.3999 20C41.3999 13.659 36.2409 8.5 29.8999 8.5Z"
                    fill="#293553"
                  />
                  <path
                    d="M37.3984 19.994C37.3984 24.142 34.0394 27.504 29.9024 27.504C28.9165 27.5039 27.9403 27.3095 27.0296 26.9319C26.1188 26.5544 25.2913 26.0011 24.5945 25.3037C23.8976 24.6063 23.345 23.7784 22.9682 22.8673C22.5914 21.9563 22.3978 20.9799 22.3984 19.994C22.3984 15.853 25.7564 12.504 29.9024 12.504C34.0394 12.504 37.3984 15.854 37.3984 19.994Z"
                    fill="#293553"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className="mt-4 flex justify-center bg-white h-20 w-20 items-center rounded-full shadow"
              >
                <svg
                  title="see more details"
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 0C10.123 0 0 20 0 20C0 20 10.123 40 30 40C49.879 40 60 20 60 20C60 20 49.879 0 30 0ZM30 36.664C13.436 36.664 5 20 5 20C5 20 13.436 3.332 30 3.332C46.566 3.332 55 20 55 20C55 20 46.566 36.664 30 36.664Z"
                    fill="#293553"
                  />
                  <path
                    d="M29.8999 34.5C21.9049 34.5 15.3999 27.995 15.3999 20C15.3999 12.005 21.9049 5.5 29.8999 5.5C37.8949 5.5 44.3999 12.005 44.3999 20C44.3999 27.995 37.8959 34.5 29.8999 34.5ZM29.8999 8.5C23.5589 8.5 18.3999 13.659 18.3999 20C18.3999 26.341 23.5589 31.5 29.8999 31.5C36.2409 31.5 41.3999 26.341 41.3999 20C41.3999 13.659 36.2409 8.5 29.8999 8.5Z"
                    fill="#293553"
                  />
                  <path
                    d="M37.3984 19.994C37.3984 24.142 34.0394 27.504 29.9024 27.504C28.9165 27.5039 27.9403 27.3095 27.0296 26.9319C26.1188 26.5544 25.2913 26.0011 24.5945 25.3037C23.8976 24.6063 23.345 23.7784 22.9682 22.8673C22.5914 21.9563 22.3978 20.9799 22.3984 19.994C22.3984 15.853 25.7564 12.504 29.9024 12.504C34.0394 12.504 37.3984 15.854 37.3984 19.994Z"
                    fill="#293553"
                  />
                </svg>
              </button>
          </div>
        </div>
        <div className="pt-4">
          <span className="block text-2xl font-medium text-center">$ {price}</span>
          <h1 className="uppercase font-medium text-gray-700 text-center">{title}</h1>
        </div>
      </Link>
      {/* <h1>{product?.title}</h1> */}
    </div>
  )
}
export default ProductCard

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
