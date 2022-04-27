import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const Search = () => {
  const [type, setType] = useState('artworks')
  const { data } = useFetch(type)
  console.log(type, 'current type')
  console.log(data, 'search data')
  return (
    <div>
        <div>
            <input type="text" placeholder="Search" />
            <select onChange={(e) => setType(e.target.value)}>
                <option value="artworks">Artworks</option>
                <option value="galleries">Galleries</option>
                <option value="exhibitions">Exhibitions</option>
                <option value="artwork-types">Artwork Types</option>
                <option value="images">Images</option>
            </select>
        </div>
    </div>
  )
}

export default Search
