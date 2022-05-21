/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Details from './pages/Details'
import Home from './pages/Home'
import './App.css'
import Search from './pages/Search'
import Tours from './pages/Tours/Tours'
import Navbar from './components/Navbar'
import ToursDetails from './pages/Tours/ToursDetail'
import Products from './pages/Products/Products'
import ProductDetails from './pages/Products/ProductDetails'

function App () {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <div className="font-inter bg-white">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route exact path="/artworks/:id" element={<Details />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/tours" element={<Tours />} />
              <Route exact path="/tours/:id" element={<ToursDetails />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default App
