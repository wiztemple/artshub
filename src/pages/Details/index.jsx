import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import JellyLoader from '../../components/JellyLoader'
import Footer from '../../components/Footer'
// icons
import chevronBack from '../../assets/icons/chevron-back.svg'

const Details = () => {
  const { id: artworkId } = useParams()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [detail, setDetail] = useState([])
  console.log(artworkId, 'artwork id')
  console.log(detail, 'detail')

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`)
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
      <div className="sm:grid grid-cols-2 sm:px-10 px-5 sm:pt-40 pt-20">
        <div>
          <span className="block pb-10">
            <Link to="/" className="uppercase flex space-x-2 items-center">
              <img src={chevronBack} />
              <span>back</span>
            </Link>
          </span>
          <div className="border-r border-gray-700 pr-4">
            <img
              src={`https://www.artic.edu/iiif/2/${detail.image_id}/full/843,/0/default.jpg`}
              alt={detail.title}
            />
            <div className="pt-5">
              <span className="block">Artist: {detail?.artist_title}</span>
              <span className="block">{detail?.artist_display}</span>
              <span className="block">Credit Line: {detail?.credit_line}</span>
              <span className="block">
                Place of origin: {detail?.place_of_origin}
              </span>
              <span className="block">Dimensions: {detail?.dimensions}</span>
            </div>
          </div>
        </div>
        <div className="md:pl-10">
          <span className="uppercase text-xl block pb-10">
            {detail?.artwork_type_title}
          </span>
          <h1 className="sm:text-8xl text-5xl font-semibold font-italiana">
            {detail.title}
          </h1>
          <h2 className="text-xl pt-6">{detail?.artist_display}</h2>
          {detail?.exhibition_history && (
            <div className="md:pt-12">
              <h3 className="text-4xl font-medium">Exhibition History</h3>
              <p className="text-gray-600 pt-5">{detail?.exhibition_history}</p>
            </div>
          )}
          {detail?.publication_history && (
            <div className="md:pt-12 overflow-x-hidden">
              <h3 className="text-4xl font-medium">Publication History</h3>
              <p className="pt-5 text-gray-800">
                {detail?.publication_history}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Details
