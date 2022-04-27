import React, { useState, useEffect } from 'react'
import ArtCard from '../../components/ArtCard'
import Footer from '../../components/Footer'
import PaginationControl from '../../components/PaginationControl'
import Spinner from '../../components/Spinner'
import { useFetch } from '../../hooks/useFetch'

const categories = [
  {
    title: 'All'
  },
  {
    title: 'Painting'
  },
  {
    title: 'Print'
  },
  {
    title: 'Textile'
  },
  {
    title: 'Sculpture'
  },
  {
    title: 'Mask'
  },
  {
    title: 'Photograph'
  },
  {
    title: 'Decorative Arts'
  },
  {
    title: 'Drawing and Watercolor'
  },
  {
    title: 'Armor'
  },
  {
    title: 'Arms'
  },
  {
    title: 'Book'
  },
  {
    title: 'Costume and Accessories'
  },
  {
    title: 'Religious/Ritual Object'
  },
  {
    title: 'Furniture'
  }
]
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
        <h1 className="text-8xl font-semibold pt-20 pb-10 font-italiana">
          Arts Works
        </h1>
        {loading && <Spinner color="#777" />}
        {error && <h1>Some days are like this!</h1>}
        <span className="block text-gray-600 pb-8">
          {data?.pagination?.total} artworks
        </span>
        <div className="md:flex space-x-3 md:pb-8 w-full">
          <select className="py-3 px-3 border-2 border-gray-300 rounded-2xl">
              <option disabled>Categories</option>
            {categories.map((category, index) => (
              <option
                className="man-w-full text-gray-800 text-sm rounded-sm px-5 py-3"
                key={index}
              >
                {category.title}
              </option>
            ))}
          </select>
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
        <PaginationControl
          page={page}
          setPage={setPage}
          currentPage={data?.pagination?.current_page}
          totalPages={data?.pagination?.total_pages}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Home
