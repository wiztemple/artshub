import React, { useState, useEffect } from 'react'
import ArtCard from '../../components/ArtCard'
import Footer from '../../components/Footer'
import PaginationControl from '../../components/PaginationControl'
import JellyLoader from '../../components/JellyLoader'
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useFetch('artworks', page)
  const artworks = data?.data
  console.log(data, 'data')
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' })
  }, [page])

  return (
    <div className="bg-cream">
      <div className="px-10">
        <h1 className="text-8xl font-semibold pt-64 pb-10 font-italiana">
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
