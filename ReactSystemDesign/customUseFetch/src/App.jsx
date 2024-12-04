import React from 'react'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {
  const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts")
  if(loading)
    return <p>Loading...</p>
  if(error)
    return <p>Error:{error}</p>
  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data && data.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

/*Create a custom hook “useFetch” that fetches data from an API endpoint and handles 
the loading, error, and success states
*
*
*******/ 
