import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import JellyLoader from '../../components/JellyLoader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import PaginationControl from '../../components/PaginationControl'

const Tours = () => {
  const [page, setPage] = useState(1)
  const { data, loading } = useFetch('tours', page)
  const tours = data?.data
  console.log(tours, 'tour is tourssss')
  console.log(data, 'data dey here')
  return (
    <>
      <div className="md:px-10 bg-white">
        <h1 className="text-9xl font-medium font-italiana md:pb-20 md:pt-64">Tours</h1>
        {loading && <JellyLoader />}
        <div className="md:grid grid-cols-2 gap-6">
          {tours?.map((tour) => (
            <div
              key={tour.id}
              className=" bg-white rounded items-center border"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="py-8 px-5">
              <Link to={`/tours/${tour.id}`} className="text-2xl font-medium underline uppercase hover:underline">{tour.title}</Link>
              <div className="text-gray-800 pt-2" dangerouslySetInnerHTML={{ __html: tour.description }}></div>
              </div>
            </div>
          ))}
        </div>
        {tours?.length && (
            <PaginationControl
              page={page}
              setPage={setPage}
              currentPage={data?.pagination?.current_page}
              totalPages={data?.pagination?.total_pages}
            />
        )}
      </div>
      <Footer />
    </>
  )
}
export default Tours
