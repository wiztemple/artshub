import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { useFetch } from '../hooks/useFetch'
import ArtworkCard from '../components/ArtworkCard'
import PaginationControl from '../components/PaginationControl'

// const categories = [
//   {
//     title: 'All',
//   },
//   {
//     title: 'Painting',
//   },
//   {
//     title: 'Print',
//   },
//   {
//     title: 'Textile',
//   },
//   {
//     title: 'Sculpture',
//   },
//   {
//     title: 'Mask',
//   },
//   {
//     title: 'Photograph',
//   },
//   {
//     title: 'Decorative Arts',
//   },
//   {
//     title: 'Drawing and Watercolor',
//   },
//   {
//     title: 'Armor',
//   },
//   {
//     title: 'Arms',
//   },
//   {
//     title: 'Book',
//   },
//   {
//     title: 'Costume and Accessories',
//   },
//   {
//     title: 'Religious/Ritual Object',
//   },
//   {
//     title: 'Furniture',
//   },
// ]
const Home: NextPage = () => {
  const [page, setPage] = useState(1)
  const { data, error } = useSWR(
    `https://api.artic.edu/api/v1/artworks?page=${page}`
  )
  // const { data, error, loading } = useFetch('artworks', page)
  const artworks = data?.data
  console.log(data, 'data')

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' })
  }, [page])
  if (error) return <div>failed to load</div>
  return (
    <>
      <div className="bg-cream">
        <div className="px-10">
          <h1 className="pt-20 pb-10 font-italiana text-8xl font-semibold">
            Arts Works
          </h1>
          <div className="items-center justify-between md:flex pb-8">
            <span className="block text-gray-600">
              {data?.pagination?.total} artworks
            </span>
            <PaginationControl
              page={page}
              setPage={setPage}
              currentPage={data?.pagination?.current_page}
              totalPages={data?.pagination?.total_pages}
            />
          </div>
          {!data && <div>loading...</div>}
          {/* <div className="w-full space-x-3 md:flex md:pb-8">
          <select className="rounded-2xl border-2 border-gray-300 py-3 px-3">
            <option disabled>Categories</option>
            {categories.map((category, index) => (
              <option
                className="man-w-full rounded-sm px-5 py-3 text-sm text-gray-800"
                key={index}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div> */}
          <div className="grid-cols-2 gap-12 md:grid">
            {artworks?.map((artwork) => (
              <ArtworkCard
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
      </div>
    </>
  )
}

// export async function getServerSideProps({params}) {
//   console.log(params)
//   const type = params.type;
//   const res = await fetch(`https://api.artic.edu/api/v1/artworks`)
//   const data = await res.json()
//   return { props: { data } }
// }

export default Home
