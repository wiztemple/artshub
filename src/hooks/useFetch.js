import { useEffect, useState } from 'react'

export const useFetch = type => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.artic.edu/api/v1/${type}`)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [type])

  return { data, error, loading }
}
