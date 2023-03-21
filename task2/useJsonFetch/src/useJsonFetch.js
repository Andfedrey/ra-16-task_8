import { useEffect, useState } from "react";

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect( () => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}${opts}`)
        if(!response.ok) {
          setError('код не 20x')
          throw error
        }
        if(response.status === 400) {
          setError('ошибка ответа')
          throw error
        }
        if(!response.json()){
          setError('ошибка парсинга')
          throw error
        }
        if(!response.json()){
          setError('ошибка парсинга')
          throw error
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError('ошибка сети')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return [data, error, loading]
}

export default useJsonFetch;