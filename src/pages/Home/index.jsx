import React from 'react'
import ArtCard from '../../components/ArtCard'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const { data, error, loading } = useFetch('artworks')
  const artworks = data?.data
  console.log(data, 'data')
  return (
    <div className="bg-cream">
      <Navbar />

      <div className="px-10">
        <h1 className="text-8xl font-semibold pt-20 pb-10 font-italiana">
          Arts Works
        </h1>
        {loading && <Spinner color="#777" />}
        {error && <h1>Some days are like this!</h1>}
        <div className="md:grid grid-cols-2 gap-12">
          {artworks?.map((artwork) => (
            <ArtCard
              key={artwork.id}
              artworkId={artwork.id}
              artImage={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              title={artwork.title}
              artworkTypeTitle={artwork.artwork_type_title}
              departmentTitle={artwork.department_title}
              description={artwork.provenance_text}
              onLoanDisplay={artwork.on_loan_display}
            />
            // <div key={artwork.id}>
            //     <h1 className="text-3xl">{artwork.title}</h1>
            //     <p>{artwork.credit_line}</p>
            //     <p>{artwork.date_display}</p>
            //     <p>{artwork.department_title}</p>
            //     <p>{artwork.inscriptions}</p>
            //     <p>{artwork.place_of_origin}</p>
            //     <p>{artwork.provenance_text}</p>
            //     {/* <p>{artwork.publication_history}</p> */}
            //     <p>{artwork.medium_display}</p>
            //     <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt="image" />
            //     {/* <p className="text-gray-700">{artwork.exhibition_history}</p> */}
            // </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
