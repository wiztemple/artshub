import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import JellyLoader from '../../components/JellyLoader'
import Footer from '../../components/Footer'
// icons
import chevronBack from '../../assets/icons/chevron-back.svg'

const ToursDetails = () => {
  const { id: tourId } = useParams()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [detail, setDetail] = useState([])
  console.log(tourId, 'tour id')
  console.log(detail, 'detail')

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/tours/${tourId}`)
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
    <div className="bg-cream">
      <div className="md:grid grid-cols-2 md:px-10 md:pt-40">
        <div>
          <span className="block pb-10">
            <Link to="/tours" className="uppercase flex space-x-2 items-center">
              <img src={chevronBack} />
              <span>back</span>
            </Link>
          </span>
          <div className="border-r border-gray-700 pr-4">
            <img
              src={detail?.image}
              alt={detail.title}
              className="w-full"
            />
            <div className="pt-5">
                {detail?.artist_titles.length ? <h1 className="text-2xl font-medium">Artist Titles</h1> : ''}
                {detail?.artist_titles?.map(artist => (
                    <span className="block" key={artist}>{artist}</span>
                ))}
                <h1 className="text-2xl pt-4 font-medium">Artwork Titles</h1>
                {detail?.artwork_titles?.map(artist => (
                    <span className="block" key={artist}>{artist}</span>
                ))}
            </div>
          </div>
        </div>
        <div className="md:pl-10">
          <span className="uppercase text-xl block pb-10">
            {detail?.artwork_type_title}
          </span>
          <h1 className="text-8xl font-semibold font-italiana pb-2">
            {detail.title}
          </h1>
          <div className="text-gray-800 pt-2 text-lg first-letter:text-6xl" dangerouslySetInnerHTML={{ __html: detail?.description }}></div>
          <div className="text-gray-800 pt-3 text-lg" dangerouslySetInnerHTML={{ __html: detail?.intro }}></div>
          <div className="text-gray-800 pt-2 text-lg" dangerouslySetInnerHTML={{ __html: detail?.intro_transcript }}></div>
          <h2 className="text-xl pt-6">{detail?.artist_display}</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ToursDetails
