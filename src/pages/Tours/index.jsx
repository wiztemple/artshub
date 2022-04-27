import React, { useState } from 'react'
import Spinner from '../../components/Spinner'
import { useFetch } from '../../hooks/useFetch'
import Footer from '../../components/Footer'

const Tours = () => {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useFetch('tours', page)
  const tours = data?.data
  console.log(tours, 'data is tourssss')
  console.log(data, 'data dey here')
  return (
    <>
      <div className="md:px-10">
        <h1 className="text-9xl font-medium font-italiana md:py-20">Tours</h1>
        <div className="md:grid grid-cols-2">
          {tours?.map((tour) => (
            <div
              key={tour.id}
              className="margin-[60px] bg-red-600 flex flex-col items-center"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-[80%] h-[500px] object-cover"
              />
              <h1 className="text-3xl">{tour.title}</h1>
              {/* <div className="text-gray-800 pt-2" dangerouslySetInnerHTML={{ __html: tour.intro }}></div>
                    <div className="text-gray-800 pt-2" dangerouslySetInnerHTML={{ __html: tour.description }}></div>
                    <div className="text-gray-800 pt-2" dangerouslySetInnerHTML={{ __html: tour.intro_transcript }}></div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Tours
