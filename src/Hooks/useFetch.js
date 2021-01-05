import {useState, useEffect} from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setData(res.results)
          setLoading(false)
        }, 2000)
      })
      .catch(err => {
        setError(err);
      })
  }, [url])
  return {
    data,
    loading,
    error
  }
}

export default useFetch