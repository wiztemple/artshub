import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import JellyLoader from '../../components/JellyLoader'
import Footer from '../../components/Footer'
// icons
import chevronBack from '../../assets/icons/chevron-back.svg'

const ProductDetails = () => {
  const { id: productId } = useParams()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [detail, setDetail] = useState([])
  console.log(productId, 'tour id')
  console.log(detail, 'detail')

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setDetail(data?.data)
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!isLoaded) {
    return <JellyLoader />
  }
  return (
    <div className="bg-white">
      <div className="sm:grid grid-cols-2 md:px-10 px-5 md:pt-40">
        <div>
          <span className="block pb-10">
            <Link to="/products" className="uppercase flex space-x-2 items-center">
              <img src={chevronBack} />
              <span>back</span>
            </Link>
          </span>
          <div className="border-r border-gray-700 pr-4">
            <img
              src={detail?.image_url}
              alt={detail.title}
              className="w-full"
            />
          </div>
        </div>
        <div className="md:pl-10">
          <span className="uppercase text-xl block pb-10">
            {detail?.artwork_type_title}
          </span>
          <h1 className="md:text-8xl text-5xl font-semibold font-italiana pb-2">
            {detail.title}
          </h1>
          <div className="text-gray-800 pt-2 text-lg first-letter:text-6xl" dangerouslySetInnerHTML={{ __html: detail?.description }}></div>
          <div className="text-gray-800 pt-3 text-4xl font-medium" dangerouslySetInnerHTML={{ __html: detail?.price_display }}></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails
