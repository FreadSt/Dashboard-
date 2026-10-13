import {useEffect, useState} from 'react';

export const useUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {

    setLoading(true);
    setError(null);

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, {signal: controller.signal})
        if(!res.ok) {
          throw new Error()
        }
        const data = await res.json();
        setData(data)
      } catch (err) {
        if (err === 'AbortError') return; 
        setError(String(err))
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [])

  return {data, loading, error}
}