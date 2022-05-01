/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import './App.css'
import Search from './pages/Search'
import Tours from './pages/Tours'
import Navbar from './components/Navbar'
import ToursDetails from './pages/ToursDetails'

function App () {
  return (
    <div className="font-inter">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/artworks/:id" element={<Details />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/tours" element={<Tours />} />
            <Route exact path="/tours/:id" element={<ToursDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
