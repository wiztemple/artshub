import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useFetch } from '../../hooks/useFetch'

const ImageSlider = () => {
  const [width, setWidth] = useState(0)
  const [page, setPage] = useState(Math.floor(Math.random() * 50))
  const { data, loading } = useFetch('images', page)

  console.log(data, 'image data')
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  })
  return (
    <>
    {loading && <h1>Loading...</h1>}
      <motion.div
        className="carousel cursor-grab overflow-hidden"
        ref={carousel}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel md:flex space-x-8"
        >
          {data?.data?.map((image) => (
            <motion.div
              className="min-w-[20rem]"
              key={image.id}
              animate={{
                scale: 1,
                transition: {
                  duration: 1
                }
              }}
            >
              <img
                className="w-full object-contain rounded-[1rem] pointer-events-none"
                src={`https://www.artic.edu/iiif/2/${image.id}/full/843,/0/default.jpg`}
                alt=""
              />
              <h1 className="pt-5 font-italiana font-semibold">{image.artwork_titles[0]}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}
export default ImageSlider
