import React,{useState,useEffect} from 'react'

function useFetch(url) {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  useEffect(()=>{
    if(!url)
        return
    const fetchData = async ()=>{
        setLoading(true)
        setError(null)
        try{
            const response = await fetch(url)
            if(!response.ok)
                throw new Error(`Error:${response.status}`)
            const result = await response.json()
            setData(result)
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }
    fetchData()
    //or
    // (async () => {
    //     setLoading(true);
    //     setError(false);
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) throw new Error(`Error:${response.status}`);
    //       const result = await response.json();
    //       setData(result);
    //     } catch (err) {
    //       setError(err.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   })(); // IIFE
  },[url])
  return {data,loading,error}
}

export default useFetch