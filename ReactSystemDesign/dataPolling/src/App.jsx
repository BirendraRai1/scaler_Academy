/*Implement data polling to periodically fetch updated data from an API and refresh the view in 
real-time
*
****/ 


import React from 'react'
import usePollingFetch from './hook/usePollingFetch'
import './App.css'

function App() {
  const {data,loading,error} = usePollingFetch("https://jsonplaceholder.typicode.com/posts",5000)
  if(loading)
    return <p>Loading....</p>
  if(error)
    return <p>Error:{error}</p>
  return (
    <div>
      <h1>Live Data Updates:</h1>
      <ul>
        {data && data.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App


/*data &&: This checks if data exists (i.e., it is not null or undefined). If data is falsy,
 the expression short-circuits, and nothing is rendered.
data.map(...): If data is an array, the .map() method iterates over each element in the 
array and creates an <li> element for every item.
*
*
*
******/ 
