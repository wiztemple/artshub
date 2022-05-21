import React, { useState, useEffect } from 'react'
import ArtCard from '../../components/ArtCard'
import Footer from '../../components/Footer'
import PaginationControl from '../../components/PaginationControl'
import JellyLoader from '../../components/JellyLoader'
import { useFetch } from '../../hooks/useFetch'
import ImageSlider from '../../components/ImageSlider'

const Home = () => {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useFetch('artworks', page)
  const artworks = data?.data
  console.log(data, 'data')
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' })
  }, [page])

  return (
    <div className="bg-white">
      <h1 className="font-italiana font-semibold sm:pt-36 pt-20 text-8xl text-center">Beautiful Artworks from the <br /> Institute of Arts Chicago</h1>
      <div className="pt-20 px-8">
       <ImageSlider />
      </div>
      <div className="md:px-10 px-5">
        <h1 className="sm:text-8xl text-5xl font-semibold pb-10 md:pt-20 font-italiana">
          Arts Works
        </h1>
        {loading && (
          <div className="md:pb-20">
            <JellyLoader />
          </div>
        )}
        {error && <h1>Some days are like this!</h1>}
        <div className="md:flex justify-between items-center pb-8">
          <span className="block text-gray-600">
            {data?.pagination?.total} artworks
          </span>
          {artworks?.length && (
            <PaginationControl
              page={page}
              setPage={setPage}
              currentPage={data?.pagination?.current_page}
              totalPages={data?.pagination?.total_pages}
            />
          )}
        </div>
        <div className="md:grid grid-cols-2 gap-12">
          {artworks?.map((artwork) => (
            <ArtCard
              key={artwork.id}
              artworkId={artwork.id}
              artImage={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              title={artwork.title}
              artworkTypeTitle={artwork.artwork_type_title}
              departmentTitle={artwork.department_title}
              onLoanDisplay={artwork.on_loan_display}
            />
          ))}
        </div>
        {artworks?.length && (
            <PaginationControl
              page={page}
              setPage={setPage}
              currentPage={data?.pagination?.current_page}
              totalPages={data?.pagination?.total_pages}
            />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
