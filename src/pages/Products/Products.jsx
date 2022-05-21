import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { useFetch } from '../../hooks/useFetch'
import PaginationControl from '../../components/PaginationControl'
import ProductCard from '../../components/ProductCard'
import JellyLoader from '../../components/JellyLoader'

const Products = () => {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useFetch('products', page)
  const products = data?.data
  console.log(data, 'data')
  console.log(products, 'products')
  return (
    <div className="sm:px-10 px-5 bg-white">
      <h1 className="sm:text-9xl text-6xl font-medium font-italiana sm:pb-20 pb-10 md:pt-64">
        Products
      </h1>
      <section>
          {loading && <JellyLoader />}
          {error && <h1>E shock you?</h1>}
        <div className="sm:grid grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product?.id}
              productId={product?.id}
              productImage={product?.image_url}
              title={product?.title}
              price={product?.min_current_price}
            />
          ))}
        </div>
        {products?.length && (
          <PaginationControl
            page={page}
            setPage={setPage}
            currentPage={data?.pagination?.current_page}
            totalPages={data?.pagination?.total_pages}
          />
        )}
      </section>
      <Footer />
    </div>
  )
}

export default Products
