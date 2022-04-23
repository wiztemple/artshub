/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import './App.css'
import Search from './pages/Search'

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/artworks/:id" element={<Details />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
